import Renderer from './renderer.js';
import { Game } from './game.js';

export default class TetrisGameElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    let rows = parseInt(this.getAttribute("rows")) || 20;
    let cols = parseInt(this.getAttribute("cols")) || 10;
    let speed = parseInt(this.getAttribute("speed")) || 10;
    this.game = new Game(rows, cols);
    this.game.addBlock();
    this.renderer = new Renderer(this.shadowRoot);
    this.renderer.render(this.game);
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    window.setInterval(() => {
      this.game.moveDown();
      this.renderer.update(this.game);
    }, 1000/speed);
  }

  handleKeyDown = (event) => {
    switch (event.code) {
      case "ArrowLeft": this.game.moveLeft(); break;
      case "ArrowRight": this.game.moveRight(); break;
      default: return;
    }
    this.renderer.update(this.game);
  }
}

customElements.define('tetris-game', TetrisGameElement);