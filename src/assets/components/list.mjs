let tmpl = document.createElement('template')
      tmpl.innerHTML = `
        <ul class="log-list">
          <li>This list contains information about your current viewing experience</li>
        <ul>`

class ComponentList extends HTMLElement {
  constructor()
  {
    super();
    // let tmplte = document.currentScript.ownerDocument.querySelector('#component-list');
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
  
  connectedCallback()
  {}
}

export default window.customElements.define('awlpw-componentlist', ComponentList);