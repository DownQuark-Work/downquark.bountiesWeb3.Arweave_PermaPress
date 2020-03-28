import ListComponent from '../components/list.mjs'

(function(){
  let tmpl = document.createElement('template')
      tmpl.innerHTML = `${HTMLTemplateElement.containCSS}
      <link rel="stylesheet" href="./assets/styles/css/modules/log.css">
      
      <div class="log-wrapper">
        <h3></h3>
        <awlpw-componentlist>Loadinsdfg...</awlpw-componentlist>
      </div>`

  class AwLpwLog extends HTMLElement
  {
    constructor() {
      super();
      this._logList = []
      this.logMessage = this.logMessage.bind(this)
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }

    connectedCallback()
    {console.log('asdfxc')
      // this.addEventListener('awlpw-log', obj => {
        //   document.querySelector('playercard-base')
        //     .shadowRoot.querySelector('playercard-back')
        //       .shadowRoot.querySelector('form')
        //         .setAttribute('style','display:none')
        //   document.querySelector('playercard-base')
        //     .shadowRoot.querySelector('playercard-front')
        //       .shadowRoot.querySelector('playercard-frontheader')
        //         .singlePlayerStatsList = selectedPlayer[0]
        //   document.querySelector('playercard-base')
        //     .shadowRoot.querySelector('playercard-front')
        //       .shadowRoot.querySelector('playercard-frontstats')
        //         .singlePlayerStatsList = selectedPlayer[0]
      // })
      this._setModuleAttributes()

      customElements.whenDefined('awlpw-log').then(() => { // root loaded, wait for nested components
        tmpl.innerHTML = tmpl.innerHTML.replace('<h3>',`<h3>${this.attribute?.title}`)
        Promise.all([ //Remove when `slotchange` support recognizes initial load
                customElements.whenDefined('awlpw-componentlist'),
                // customElements.whenDefined('playercard-front'),
                // customElements.whenDefined('playercard-frontheader'),
                // customElements.whenDefined('playercard-frontstats'),
              ]).then(_baseUserStats => this._handleNestedComponentsLoaded('tst'));
      })
    }

    disconnectedCallback()
    { }
  

    _setModuleAttributes(){
      for(let i=0; i< this.attributes.length; i++)
      {
        if(!this.hasAttribute(this.attributes[i].name))
        { this.setAttribute(this.attributes[i].name, this.getAttribute[i]||true); }
      }
    }
    static get observedAttributes() 
    { return ['logId, title, msg'] } // return destructured list of attributes to listen to

    get logId() { return this.hasAttribute('logId'); }
    set logId(val) { (val) ? this.setAttribute(val.toString(), val) : this.removeAttribute(val.toString()) }

    get title() { return this.hasAttribute('title'); }
    set title(val) { (val) ? this.setAttribute(val.toString(), val) : this.removeAttribute(val.toString()) }
    
    attributeChangedCallback(attrName, oldVal, newVal)
    { console.log('attrName, oldVal, newVal',attrName, oldVal, newVal)
      // this.logMessage('x')
    } /* handle side effects only */

    logMessage(s){
      console.log(newLogLine,'s')
    }

    _handleNestedComponentsLoaded(){
      console.log('log is loaded with attrs',this.attributes)
    }
  }
  window.customElements.define('awlpw-log', AwLpwLog);
})()