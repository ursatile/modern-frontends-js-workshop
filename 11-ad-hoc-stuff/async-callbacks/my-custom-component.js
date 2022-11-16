class MyCustomComponentElement extends HTMLElement {
    #secretShadow;

    constructor() {
        super();
        this.#secretShadow = this.attachShadow({ mode: 'closed' });
    }
    connectedCallback() {
        let h1 = document.createElement("h1");
        h1.innerHTML = "loaded by connectedCallback BEFORE the async call!";
        this.#secretShadow.appendChild(h1);
        var albums = fetch('http://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((data) => {
                for (var i = 0; i < 5; i++) {
                    let h1 = document.createElement("h1");
                    h1.innerHTML = data[i].title;
                    this.#secretShadow.appendChild(h1);
                }
            });
        h1 = document.createElement("h1");
        h1.innerHTML = "loaded by connectedCallback AFTER the async call!";
        this.#secretShadow.appendChild(h1);

        console.log("This should happen immediately");
    }
}
customElements.define('my-custom-component', MyCustomComponentElement);
