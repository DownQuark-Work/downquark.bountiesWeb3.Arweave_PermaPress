(function(){
  'use strict'

  const nodeConfig = {
                      detachedMin:0, // 0 to get most recent
                      externalMax:0,
                      loadingData: [
                                      'Obtaining Externally Linked Sites',
                                      'Formatting Graph Data',
                                      'Loading Graph',
                                      'Loading User Information',
                                      'Loading Logs',
                                      'Gathering Starting Points',
                                      'COMPLETE'
                                  ],
                      loadingPos:0,
                    }
                    
  const arweave = Arweave.init({logging: true})
  let arNetwork,
      blocksLoaded = [], // [max, ..., min]
      nodeHash = {} // {  baseUrl:string: {links:{<btoa(url)>: {url:string, type:'internal|external', txnId:string|null} }, txn:{<txnId>: {data:string, owner:string, tags: {title, timestamp}}}} }

  const setPermaPressContent = () => {
    console.log('setPermaPressContent::nodeHash',nodeHash)
    //1585389147416
    //1585388580000 => 13
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

    document.querySelector('.subhead').innerText = new Date(parseInt(pageTimestamp,10))
    console.log('pageTimestamp',pageTimestamp)
    console.log('pageUrlKey',pageUrlKey,pageUrl)
    console.log('pageTxnId',pageTxnId,pageTxnObj,pageTitle,pageTimestamp)
    console.log('contentObj',contentObj,hashKey)
    console.log('pageData',pageBodyDataRender)
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
          console.log('txQ',txQ)
          let baseUrl
          if(txQ.status === 'fulfilled')
          {
            txQ.tagDecode = {}
            txQ.value.get('tags').forEach(tag => 
            {
              let k = tag.get('name', {decode: true, string: true}),
                  v = tag.get('value', {decode: true, string: true})
                  console.log('k,v',k,v)
              if(k === 'page:url')
              {
                console.log('PAGE::URL',k)
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
              //internal links should start being set here as well
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
      //375340 - 375364, 375403 <-- good blocks for debugging [a lot of twitter]
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
              // loadBlock(375364) // <-- GREAT for Debug
              // loadBlock(375403) // <-- GREAT for Debug
              loadBlock(arNetwork.height)
            })
        .catch(err => console.error(err))
  } // END loadingData[0]

  const queryTxn = (txn) =>
  {
    //BELOW IS DONE IF txn IS QUERIED DIRECTLY
      // ALLOWS TAGS TO COME BACK PARSED VERY QUICKLY
    /**
    curl 'https://arweave.net/arql'
    -H 'authority: arweave.net'
    -H 'origin: https://mdflqndwudrx.arweave.net'
    -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.131 Safari/537.36'
    -H 'content-type: text/plain;charset=UTF-8'
    -H 'accept: *//*'
    -H 'sec-fetch-site: same-site'
    -H 'sec-fetch-mode: cors'
    -H 'referer: https://mdflqndwudrx.arweave.net/A7ctf1azriZxHGWKurMQfDFrGOncG-MBn4A59Tt1kzw/index.html'
    -H 'accept-encoding: gzip, deflate, br'
    -H 'accept-language: en-US,en;q=0.9' --data-binary '
    {"query":"query 
    {\n    transaction(id: \"Cn_kOJHBAGQ0XaaiL5wRZ6byC-LSBg2Mhdzz79C-0SM\") 
    {\n      id,\n      tags 
    {\n        name,\n        value\n      }\n    }\n  }"}' --compressed
    */
      // THEN THE REST OF THE DATA IS RETRIEVED WITH THE TAGS ENCODED AND IGNORED
    //  https://arweave.net/tx/Cn_kOJHBAGQ0XaaiL5wRZ6byC-LSBg2Mhdzz79C-0SM
  }

  // console.warn('UNCOMMENT `loadNodes()` BELOW WHEN READY')
  loadNodes()
})()