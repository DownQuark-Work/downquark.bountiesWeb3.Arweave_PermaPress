const IN_DEVELOPMENT = true;

(function() {
  const setReadOnlyError = {set: function (y) { console.error('ERROR: This Property is READONLY') }}
  Date.prototype.getDaysOfWeek = () => ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'];
  Object.defineProperty(Date.prototype, 'HEADER',
    { get: function () { this.fmt = 'MM / DD / YYYY'; return this }, ...setReadOnlyError })
  Object.defineProperty(Date.prototype, 'CONTENT_FILE',
    { get: function () { this.fmt = 'YYYYMMDD'; return this }, ...setReadOnlyError })
  Object.defineProperty(Date.prototype, 'SKEUMORPH',
    { get: function () { this.fmt = 'YYYY-MM-DD'; return this }, ...setReadOnlyError })
  Object.defineProperty(Date.prototype, 'TITLE',
    { get: function () { this.fmt = 'MM.DD YYYY'; return this }, ...setReadOnlyError })
  Date.prototype.formatDate = function(fm)
  {
    const dat = this,
          fmt = fm || this.fmt,
          amt = (s) => (fmt.match(new RegExp(s, 'gi')) || []).length
    const y = amt('y') === 2 ? String(dat.getUTCFullYear()).slice(-2) : dat.getUTCFullYear()+'',
          m = amt('m') === 2 ? String('0' + (dat.getUTCMonth() + 1)).slice(-2) : dat.getUTCMonth() + 1+'',
          d = amt('d') === 2 ? String('0' + (dat.getUTCDate())).slice(-2) : dat.getUTCDate()+''
    return fmt.replace(/([YMD]+)/gi, 
    (match, p1, offset, string) => p1.replace(/y+/gi, y).replace(/m+/gi, m).replace(/d+/gi, d))
      
  }
  Date.prototype.getMonthsOfYear = (returnFullName) => returnFullName
                                                                ? ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"]
                                                                : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  Date.prototype.getNamedMonth = (indx, returnFullName) => returnFullName
                                                                ? ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"][indx]
                                                                : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][indx]
  Date.prototype.getNamedDay = (indx, returnFullName) => returnFullName
                                                                ? ['Sunday','Monday','Tuesday','Wedday','Thuday','Friday','Saturday'][indx]
                                                                : ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'][indx]
  Date.prototype.getEpochRange = (startDate, endDate) => [new Date(startDate).getTime(), new Date(endDate).getTime()]
  Date.prototype.getRandomDate = (past,future) =>
  { //defaults to a 30 day range with `new Date()` as mid-point
    const currentTime = new Date().getTime(),
          dayInMS = 1000*60*60*24,
          offsetFuture = (future || 15)*dayInMS,
          offsetPast = (past || 15)*dayInMS,
          rangeEnd = currentTime+offsetFuture,
          rangeStart = currentTime-offsetPast,
          timestamp = Math.random()*rangeEnd-rangeStart
    return new Date(timestamp)
  }
  Date.prototype.getFullCalendarDates = (dt) =>
  {
    const first = new Date(dt.getFullYear(), dt.getMonth(), 1),
          last = new Date(dt.getFullYear(), dt.getMonth() + 1, 0),
          startDay = new Date(first).getDay(),
          endDay = new Date(last).getDay(),
          startDayEpoch = new Date(first).getTime(),
          endDayEpoch = new Date(last).getTime(),
          daysInMonth = new Date(dt.getFullYear(), 
                                  dt.getMonth()+1,0).getDate(),
          daysLastMonth = new Date(dt.getFullYear(), 
                                  dt.getMonth(),0).getDate(),
          retDates = {
            numbered:[],
            epoch:[]
          },
          msInDay = 24*60*60*1000,
          totalIndexes = (startDay+daysInMonth > 5*7) ? 6*7 : 5*7
    for(let i=0; i<totalIndexes; i++)
    {
      if(i < startDay)
      {
        retDates.epoch.push(startDayEpoch-((startDay-i)*msInDay))
        retDates.numbered.push(daysLastMonth-(startDay-i)+1)
      }
      else if(i < daysInMonth+startDay)
      {
        retDates.epoch.push(startDayEpoch+((i-startDay)*msInDay))
        retDates.numbered.push(i-startDay+1)
      }
      else
      {
        retDates.epoch.push(startDayEpoch+((i-startDay)*msInDay))
        retDates.numbered.push(i-(daysInMonth+startDay)+1)
      }
    }
    return retDates
  }

  //ARRAY
  Array.prototype.shuffle = function()
  {
    let i = 0,
        j = 0,
        temp = null

    for (i = this.length - 1; i > 0; i -= 1)
    {
      j = Math.floor(Math.random() * (i + 1))
      temp = this[i]
      this[i] = this[j]
      this[j] = temp
    }
    return this
  }
  Array.prototype.unique = function()
  { return this.filter((itm, indx, arr) => {return arr.indexOf(itm) === indx}); }
  if (!Array.prototype.last && !Array.prototype.len) // Needed for hmr
  {
    Object.defineProperty(Array.prototype, 'last', {
      get: function () { return this[this.length - 1] },
      set: function (y) { console.error('ERROR: last is READONLY') }
    })
    Object.defineProperty(Array.prototype, 'len', {
      get: function () { return this.length - 1 },
      set: function (y) { console.error('ERROR: len is READONLY') }
    })
  }

  //MATH
  Object.defineProperty(Math, 'msInDay', {
      get: function () { return 24*60*60*1000 },
      set: function (y) { console.error('ERROR: msInDay is READONLY') }
    })
  Number.prototype.msOffset = function(amt)
  { //usage : new Date().getTimestamp().msOffset('12 m')
      // supports: (s)econds (m)inutes (h)ours (d)ays (w)eeks (M)onths [uses 30 days] (y)ears
      // any /\^(-?\d*)[^smhdwMy]*(s|m|h|d|w|M|y)/ pattern will work
        //'12d','12 d', '12 days', '-12 drunken sailors', '12 bobbing daffodils' = will all add (or subtract) 12 days worth of millis
    const [mtch, d, s] = amt.match(/^(-?\d*)[^smhdwMy]*(s|m|h|d|w|M|y)/)
    if(isNaN(parseInt(d,10))){ throw new Error(`${d} can not be converted to an integer`) }
    if(!s){ throw new Error(`${s} is not a valid param. Please use this pattern /(s|m|h|d|w|M|y)/`) }
    
    let multAmt = 1, charArr = ['s','m','h','d'], multArr = [1000,60,60,24], multObj = {w:7,M:30,y:365}
    for(let i=0; i<charArr.length; i++)
    { multAmt *= multArr[i]; if(charArr[i] === s){ return this + parseInt(d,10) * multAmt} }
    return  this + parseInt(d,10) * multObj[s] * multAmt
  }
  
  //STRING
  String.prototype.removeClasses = (a) => a.replace(/(\s?class="[\w\d\s"]*)/g,'')
  String.prototype.rmClasses = function(){ return this.replace(/(\s?class="[\w\d\s"]*)/g,'') }
  String.prototype.noExt = function () { return (this && this.replace(/\.\w*$/g,'')) }
  String.prototype.getDateFromFileName = function(da)
  {
    const dt = da || this,
          dat  = `${dt.slice(0,4)}-${dt.slice(4,6)}-${dt.slice(6,)}`
    return new Date(dat).getTime()
  }


//CONSOLE
console.devCount=0
console.dev = (key, ...opts) =>
{
  //USAGE
  // console.dev('base', 'group-table', [1, 3, 'mom', 'bob'], 1, 3, 'mom', 'bob')
  // console.dev('base', 'ungroup-table', [1, 3, 'mom', 'bob'], 1, 3, 'mom', 'bob') // if _groupByDefault is true
  // console.dev('base', 'table', [1, 3, 'mom', 'bob'], 1, 3, 'mom', 'bob')
  // console.dev('base', [1, 3, 'mom', 'bob'], 1, 3, 'mom', 'bob')

  if(IN_DEVELOPMENT._global && IN_DEVELOPMENT[key])
  {
    const printTypes = ['assert','error','info','log','table','trace','warn'],
      printGroup = opts[0].includes('group-') ? !IN_DEVELOPMENT._groupByDefault : IN_DEVELOPMENT._groupByDefault,
      printType = printTypes.includes(opts[0].split('-').pop()) ? opts.shift().split('-').pop() : 'log',
      timers = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧']
    
    printGroup && console.groupCollapsed(`[${key.toUpperCase()}] ${opts[0].toUpperCase()} : ${timers[console.devCount++ % timers.length]} ${new Date().getTime()}`)
    opts.forEach(itm => {
      if(itm === Object(itm))//spread objects & arrays
      { console[printType]({ ...itm }) }
      else if(typeof(itm) === 'function')
      { console[printType](String(typeof(itm)).toUpperCase(), `[${itm.name}] : `, itm) }
      else // handle primitives
      { console[printType](typeof(itm).toUpperCase(), ' : ', itm) }
    })
    console.groupCollapsed('stack') //allows to find file where console.dev originated
    console.trace()
    console.groupEnd()
    printGroup && console.groupEnd()
  }
}

//POLYFILL
HTMLTemplateElement.containCSS = `<style>:host {all: initial;contain: content;display: block;&([hidden]) { display: none }</style>`
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
        padString = String(typeof padString !== 'undefined' ? padString : ' ');
        if (this.length >= targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
  }
})()