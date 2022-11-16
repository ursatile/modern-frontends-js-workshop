export class Cell {
    constructor(row, col, block) {
        this.row = row;
        this.col = col;
        this.block = block;
    }

    isOccupying = (row, col) => {
        return this.row === row && this.col === col;
    }

    canMoveDown = game => {
        let otherBlocks = game.blocks.filter(block => block != this.block);
        if (otherBlocks.some(block => block.isOccupying(this.row + 1, this.col))) return false;
        return (this.row + 1 < game.rows);
    }

    canMoveLeft = (game) => (this.col - 1 >= 0);
    canMoveRight = (game) => (this.col + 1 < game.cols);

    moveDown = () => { this.row++; }
    moveLeft = () => { this.col--; }
    moveRight = () => { this.col++; }
}

export class Block {

    constructor(row, col) {
        this.cells = new Array();
    }

    isOccupying = (row, col) => this.cells.some(cell => cell.isOccupying(row, col));

    get blockName() { return "O"; }

    moveLeft = game => this.canMoveLeft(game) && this.cells.map(cell => cell.moveLeft());
    moveRight = (game) => this.canMoveRight(game) && this.cells.map(cell => cell.moveRight());
    moveDown = (game) => this.canMoveDown(game) && this.cells.map(cell => cell.moveDown());

    canMoveDown = (game) => this.cells.every(cell => cell.canMoveDown(game));
    canMoveLeft = (game) => this.cells.every(cell => cell.canMoveLeft(game));
    canMoveRight = (game) => this.cells.every(cell => cell.canMoveRight(game));
}

export class OBlock extends Block {
    constructor(row, col) {
        super();
        this.cells = [
            new Cell(row, col, this),
            new Cell(row + 1, col, this),
            new Cell(row + 1, col + 1, this),
            new Cell(row, col + 1, this)
        ]
    }
    get blockName() { return "O"; }
}


export class TBlock extends Block {
    constructor(row, col) {
        super();
        this.cells = [
            new Cell(row, col-1, this),
            new Cell(row, col, this),
            new Cell(row, col + 1, this),
            new Cell(row+1, col + 1, this)
        ]
    }
    get blockName() { return "T"; }
}


export class IBlock extends Block {
    constructor(row, col) {
        super();
        this.cells = [
            new Cell(row, col, this),
            new Cell(row+1, col, this),
            new Cell(row+2, col, this),
            new Cell(row+3, col, this)
        ]
    }
    get blockName() { return "I"; }
}

export class JBlock extends Block {
    constructor(row, col) {
        super();
        this.cells = [
            new Cell(row, col, this),
            new Cell(row+1, col, this),
            new Cell(row+2, col, this),
            new Cell(row+2, col+1, this)
        ]
    }
    get blockName() { return "J"; }
}

export class LBlock extends Block {
    constructor(row,col) {
        super();
        this.cells = [
            new Cell(row, col, this),
            new Cell(row+1, col, this),
            new Cell(row+2, col, this),
            new Cell(row+2, col-1, this)
        ]
    }
    get blockName() { return "L"; }
}

export class SBlock extends Block {
    constructor(row, col) {
        super();
        this.cells = [
            new Cell(row, col, this),
            new Cell(row, col+1, this),
            new Cell(row+1, col+1, this),
            new Cell(row+1, col+2, this)
        ]
    }
    get blockName() { return "S"; }
}

export class ZBlock extends Block {
    constructor(row, col) {
        super();
        this.cells = [
            new Cell(row, col, this),
            new Cell(row, col-1, this),
            new Cell(row+1, col-1, this),
            new Cell(row+1, col-2, this)
        ]
    }
    get blockName() { return "Z"; }
}

export class Game {
    #rows;
    #cols;
    #fallingBlock;
    #settledBlocks = new Array();

    constructor(rows, cols) {
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
        switch(Math.floor(Math.random() * 7)) {
            case 0: this.#fallingBlock = new TBlock(row, col); return;
            case 1: this.#fallingBlock = new IBlock(row, col); return;
            case 2: this.#fallingBlock = new OBlock(row, col); return;
            case 3: this.#fallingBlock = new JBlock(row, col); return;
            case 4: this.#fallingBlock = new LBlock(row, col); return;
            case 5: this.#fallingBlock = new SBlock(row, col); return;
            case 6: this.#fallingBlock = new ZBlock(row, col); return;
        }
    }

    get rows() { return this.#rows; }
    get cols() { return this.#cols; }
    get fallingBlock() { return this.#fallingBlock; }

    get blocks() { return this.#settledBlocks.concat([this.#fallingBlock]) };
}