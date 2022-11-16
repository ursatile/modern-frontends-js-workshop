import Config from './config.js';

class MyCustomComponentElement extends HTMLElement {
    #secretShadow;

    constructor() {
        super();
        this.#secretShadow = this.attachShadow({ mode: 'closed' });
    }
    connectedCallback() {  
        // let configScriptElementId = this.getAttribute("config");
        // let configScript = document.getElementById(configScriptElementId);
        // console.log(configScript);
        // let config = JSON.parse(configScript.innerHTML);
        console.log(Config);
        let h1 = document.createElement("h1");
        h1.style.fontFamily = Config.fontFamily;
        h1.style.color = Config.color;
        h1.innerHTML = Config.message;
        this.#secretShadow.appendChild(h1);
    }
}
customElements.define('my-custom-component', MyCustomComponentElement);
