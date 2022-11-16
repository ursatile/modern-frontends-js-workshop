class MyCounterElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.count = parseInt(this.getAttribute("initial-value"));
        this.initialCount = this.count;

        const style = document.createElement('style');
        style.innerHTML = `
div.counter-wrapper { display: inline-grid; grid-template-columns: 32px 64px 32px; grid-template-rows: 32px 24px; justify-items: stretch; align-items: stretch; grid-gap: 4px; }
div.counter-wrapper > * { border-radius: 4px; }
div.counter { text-align: center; border: 2px solid #036; }
button { font-weight: bold; font-size: 120%; overflow: hidden; border: 0; background-color: #036; color: #fff; }
button#reset-button { width: auto; font-size: 12px; font-weight: normal; width: 100%; grid-column-start: 2; }
div.counter-wrapper span { font-family: Consolas; font-weight: bold; color: #036; font-size: 150%; }`;

        this.shadowRoot.appendChild(style);
        let wrapper = document.createElement('div');
        wrapper.setAttribute("class", "counter-wrapper");
        let incrementButton = document.createElement('button');
        incrementButton.innerHTML = '▲';
        let decrementButton = document.createElement('button');
        decrementButton.innerHTML = '▼';
        this.span = document.createElement('span');
        this.span.setAttribute("id", "counter");
        this.span.innerHTML = this.count;
        let counter = document.createElement('div');
        counter.setAttribute("class", "counter");
        counter.appendChild(this.span);
        wrapper.appendChild(decrementButton);
        wrapper.appendChild(counter);
        wrapper.appendChild(incrementButton);
        let resetButton = document.createElement('button');
        resetButton.setAttribute('id', 'reset-button');
        resetButton.innerHTML = 'Reset';
        wrapper.appendChild(resetButton);
        this.shadowRoot.appendChild(wrapper);
        document.addEventListener("keydown", this.handleKeydown.bind(this));
        incrementButton.addEventListener("click", this.incrementButtonClick.bind(this));
        decrementButton.addEventListener("click", this.decrementButtonClick.bind(this));
        resetButton.addEventListener("click", this.resetButtonClick.bind(this));
    }

    incrementButtonClick(event) {
        this.count++;
        this.span.innerHTML = this.count;
    }

    decrementButtonClick(event) {
        this.count--;
        this.span.innerHTML = this.count;
    }
    resetButtonClick(event) {
        this.count = this.initialCount;
        this.span.innerHTML = this.count;
    }

    handleKeydown(event) {
        switch (event.code) {
            case "ArrowUp": this.count++; this.span.innerHTML = this.count; break;
            case "ArrowDown": this.count--; this.span.innerHTML = this.count; break;
            default: return;
        }
    }
}

customElements.define("my-counter", MyCounterElement);