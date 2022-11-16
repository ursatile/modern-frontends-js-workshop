import styles from './tetris.scss';

export default class Renderer {
    #root;
    constructor(root) {
        this.#root = root;
        this.#spans = new Array();
    }
    #spans;
    render(game) {
        let style = document.createElement('style');
        style.innerHTML = styles;
        this.#root.appendChild(style);
        for(var row = 0; row < game.rows; row++) {
            let div = document.createElement("div");
            let spans = new Array();
            for(var col = 0; col < game.cols; col++) {
                let span = document.createElement("span");
                div.appendChild(span);
                spans.push(span);
            }
            this.#root.appendChild(div);
            this.#spans.push(spans);
        }
        this.update(game);
    }
    update(game) {
        let spans = Array.from(this.#root.querySelectorAll("span"));
        spans.map(span => span.className = "");
        console.log(game);

        game.blocks.forEach(block => block.cells.forEach(cell => {
            let span = this.#spans[cell.row][cell.col];
            span.className = block.blockName;
        }));        
    }
}