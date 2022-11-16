export default class Renderer {
    #incrementButton;
    #decrementButton;
    #resetButton;
    
    constructor(shadowRoot) {
        this.root = shadowRoot;
    }

    get incrementButton() {
        return this.#incrementButton
    }

    get decrementButton() {
        return this.#decrementButton
    }

    get resetButton() {
        return this.#resetButton;
    }

    render(engine) {
        const cssLink = document.createElement('link');
        cssLink.setAttribute("rel", "stylesheet");
        cssLink.setAttribute("href", "counter.css");
        this.root.appendChild(cssLink);

        let wrapper = document.createElement('div');
        wrapper.setAttribute("class", "counter-wrapper");
        this.#incrementButton = document.createElement('button');
        this.#incrementButton.innerHTML = '▲';
        this.#decrementButton = document.createElement('button');
        this.#decrementButton.innerHTML = '▼';
        this.span = document.createElement('span');
        this.span.setAttribute("id", "counter");
        let counter = document.createElement('div');
        counter.setAttribute("class", "counter");
        counter.appendChild(this.span);
        wrapper.appendChild(this.#decrementButton);
        wrapper.appendChild(counter);
        wrapper.appendChild(this.#incrementButton);
        this.#resetButton = document.createElement('button');
        this.#resetButton.setAttribute('id', 'reset-button');
        this.#resetButton.innerHTML = 'Reset';
        wrapper.appendChild(this.#resetButton);
        this.root.appendChild(wrapper);
        this.update(engine);
    }
    
    update(engine) {
        this.span.innerHTML = engine.count;
    }
}
