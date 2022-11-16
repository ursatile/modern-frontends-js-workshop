import styles from './counter.scss';

export default class Renderer {
    #incrementButton;
    #decrementButton;
    #resetButton;
    
    constructor(shadowRoot, color) {
        this.color = color;
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
        console.log(styles);
        const cssLink = document.createElement('link');
        cssLink.setAttribute("rel", "stylesheet");
        cssLink.setAttribute("href", `counter.css`);
        this.root.appendChild(cssLink);
        // const style = document.createElement("style");
        // style.innerHTML = styles;
        // this.root.appendChild(style);

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
        this.#resetButton.innerHTML = 'RESET';
        wrapper.appendChild(this.#resetButton);

        if (this.color) {
            this.#incrementButton.style.backgroundColor = this.color;
            this.#decrementButton.style.backgroundColor = this.color;
            this.#resetButton.style.backgroundColor = this.color;
            this.span.color = this.color;
        }
        this.root.appendChild(wrapper);
        this.update(engine);
    }
    
    update(engine) {
        this.span.innerHTML = engine.count;
    }
}
