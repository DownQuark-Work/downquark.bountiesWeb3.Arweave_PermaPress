(function(){
  'use strict'

  const nodeConfig = {
                      detachedMin:0, // 0 to get most recent
                    }
                    
  const arweave = Arweave.init({logging: false})
  let arNetwork,
      blocksLoaded = [], // [max, ..., min]
      nodeHash = {} // {  baseUrl:string: {links:{<btoa(url)>: {url:string, type:'internal|external', txnId:string|null} }, txn:{<txnId>: {data:string, owner:string, tags: {title, timestamp}}}} }

  const setPermaPressContent = () => {

    const hashKey = Object.keys(nodeHash)[0],
          contentObj = nodeHash[hashKey],
          pageUrlKey = Object.keys(contentObj.links)[0],
          pageUrl = atob(pageUrlKey),
          pageTxnId = Object.keys(contentObj.txn)[0],
          pageTxnObj = contentObj.txn[pageTxnId],
          pageTitle = pageTxnObj.tags['page:title'] || '',
          pageData = pageTxnObj.data,
          pageDataContentRegex = new RegExp(/(<body[^>]*>)((.|\s)*)(<\/body)/gmi)

    let pageTimestamp = pageTxnObj.tags['page:timestamp'] || '',
        pageBodyData = pageData.match(pageDataContentRegex),
        pageBodyDataRender = pageBodyData[0].replace(/<(?!img|\/img|p|\/p).*?>/gim,'')


    
    if(pageTimestamp.length){
      while(pageTimestamp.length < 13)
      { pageTimestamp += '0' }
    }

    document.querySelector('iframe').setAttribute('src',pageUrl)

    document.querySelector('.subhead').innerText = new Date(parseInt(pageTimestamp,10))
    document.querySelector('.head.noshow > .headline').innerText = pageTitle
    document.querySelector('.head.noshow > p > .headline > a').setAttribute('href',pageUrl)
    document.querySelector('.head.noshow > p > .headline > a').setAttribute('target','_blank')
    document.querySelector('.head.noshow > p > .headline > a').innerText = pageTitle
    

    document.querySelectorAll('.noshow').forEach(itm => itm.classList.toggle('noshow'))
    document.getElementById('loading').classList.toggle('noshow')

    document.querySelector('.collumn').innerHTML = document.querySelector('.collumn').innerHTML + pageBodyDataRender
  }

  const loadNodes = (obj) => // START loadingData[0]
  {
    const validateTags = (txns) =>
    {
      const txnsQueries = txns.map(itm => arweave.transactions.get(itm))
      let isValid = false
      Promise.allSettled(txnsQueries).then(txQs =>
      {
        txQs.forEach(txQ =>
        {
          if(isValid) return false // only 1 match
          let baseUrl
          if(txQ.status === 'fulfilled')
          {
            txQ.tagDecode = {}
            txQ.value.get('tags').forEach(tag => 
            {
              let k = tag.get('name', {decode: true, string: true}),
                  v = tag.get('value', {decode: true, string: true})
              if(k === 'page:url')
              {
                baseUrl = v.replace(/.*:\/\/(www\.)?/,'').replace(/[^\w-.].*/,'').split('.')
                while(baseUrl.length > 2){ baseUrl.shift() }
                baseUrl = baseUrl.join('.')
                isValid = true
              }

              txQ.tagDecode[k] = v
            })
            if(isValid){
              let txnObj = {},
                  link = {}
                  link[btoa(txQ.tagDecode['page:url'])] = {url:txQ.tagDecode['page:url'], type:'internal', txnId:txQ.value.id}
                  delete txQ.tagDecode['page:url']

                  txnObj = {
                    data: txQ.value.get('data', {decode: true, string: true}),
                    owner: txQ.value.get('owner'),
                    tags: txQ.tagDecode,
                  }

              if(!nodeHash[baseUrl]){ nodeHash[baseUrl] = { links:{}, txn:{}} }
              nodeHash[baseUrl].links = {...nodeHash[baseUrl].links, ...link}
              nodeHash[baseUrl].txn[txQ.value.id] = txnObj
            }
          }
          if(isValid) return false // only 1 match
        })
        if(!isValid){ loadBlock(blocksLoaded.last-1) }
        else{ setPermaPressContent() }
      })
      .catch(err => console.error(err))
    }

    const loadBlock = (blk) =>
    {
      arweave.api.get(`/block/height/${blk}`)
        .then(obj => {
          blocksLoaded.push(blk)
          obj.data.txs.length ? validateTags(obj.data.txs) : loadBlock(--blk)
        })
        .catch(err => console.error(err))
    }

    arweave.network.getInfo()
      .then(obj =>
            {
              arNetwork = {...obj} //clone in case we need to mutate anything
              loadBlock(arNetwork.height)
            })
        .catch(err => console.error(err))
  } // END loadingData[0]

  loadNodes()
})()