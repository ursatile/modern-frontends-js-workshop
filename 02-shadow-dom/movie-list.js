// movie-list.js
class MovieListElement extends HTMLElement {
    #topSecretThing = null;

    constructor() {
      super();
      this.#topSecretThing = this.attachShadow({ mode: 'closed' });
    }
    connectedCallback() {
      this.#topSecretThing.innerHTML = `
        <ul>
        <li>Alien</li>
        <li>Back to the Future</li>
        <li>Dirty Dancing</li>
        <li>Jumanji</li>
        <li>Zoolander</li>
        </ul>`;
    }
  }
  
  customElements.define('movie-list', MovieListElement);