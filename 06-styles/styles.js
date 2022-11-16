class StyleExample1 extends HTMLElement {
    connectedCallback() {
        let span = document.createElement('span');
        span.setAttribute('style', 'color: red; font-weight: bold;');
        span.innerText = 'Hello, World! (in bold red)';
        this.appendChild(span);
    }
}

class StyleExample2 extends HTMLElement {
    connectedCallback() {
        let span = document.createElement('span');
        span.style.color = 'red';
        span.style.fontWeight = 'bold';
        span.innerText = 'Hello, World! (in bold red)';
        this.appendChild(span);
    }
}
class StyleExample3 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        let style = document.createElement('style');
        style.innerHTML = `span { color: red; font-weight: bold; }`;
        this.shadowRoot.appendChild(style);

        let span = document.createElement('span');
        span.innerText = 'Hello, World! (in bold red)';
        this.shadowRoot.appendChild(span);
    }
}
class StyleExample4 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "styles.css");
        this.shadowRoot.appendChild(link);
        
        let span = document.createElement('span');
        span.innerText = 'Hello, World! (in bold red)';
        this.shadowRoot.appendChild(span);
    }
}

window.customElements.define('style-example-1', StyleExample1);
window.customElements.define('style-example-2', StyleExample2);
window.customElements.define('style-example-3', StyleExample3);
window.customElements.define('style-example-4', StyleExample4);