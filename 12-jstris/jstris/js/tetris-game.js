
export default class TetrisGameElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = "TODO: invent Tetris";  
  }
}

customElements.define('tetris-game', TetrisGameElement);