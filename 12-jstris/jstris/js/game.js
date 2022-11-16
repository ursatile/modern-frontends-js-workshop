export class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    
    canMoveDown = game => (this.row + 1 < game.rows);    
    canMoveLeft = (game) => (this.col - 1 >= 0);
    canMoveRight = (game) => (this.col + 1 < game.cols);
    
    moveDown = () => { this.row++; }
    moveLeft = () => { this.col--; }
    moveRight = () => { this.col++; }
}

export class Block {  
    #cells;
    constructor(row, col) {
        this.#cells = [ new Cell(row, col) ]
    }
 
    get blockName() { return "O"; } 
 
    get cells() { return this.#cells; }

    moveLeft = game => this.canMoveLeft(game) && this.#cells.map(cell => cell.moveLeft());
    moveRight = (game) => this.canMoveRight(game) &&  this.#cells.map(cell => cell.moveRight());
    moveDown = (game) => this.canMoveDown(game) && this.#cells.map(cell => cell.moveDown());

    canMoveDown = (game) => this.#cells.every(cell => cell.canMoveDown(game));
    canMoveLeft = (game) => this.#cells.every(cell => cell.canMoveLeft(game));
    canMoveRight = (game) => this.#cells.every(cell => cell.canMoveRight(game));
}

export class Game {
    #rows;
    #cols;
    #fallingBlock;
    #settledBlocks = new Array();

    constructor(rows,cols) {
        this.#rows = rows;
        this.#cols = cols;
    }

    moveLeft = () => this.#fallingBlock.moveLeft(this);
    moveRight = () => this.#fallingBlock.moveRight(this);
    moveDown = () => {
        if (this.#fallingBlock.moveDown(this)) return;
        this.#settledBlocks.push(this.#fallingBlock);
        this.addBlock();
    }
    
    addBlock() {
        let row = 0;
        let col = Math.floor(this.cols / 2);
        this.#fallingBlock = new Block(row, col);
    }

    get rows() { return this.#rows; }
    get cols() { return this.#cols; }
    get fallingBlock() { return this.#fallingBlock; }

    get blocks() { return this.#settledBlocks.concat([this.#fallingBlock]) };
}