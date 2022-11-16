import { Rectangle } from './square.js';

export default function Flag(canvasId, x, y) {
    Rectangle(canvasId, x-1, y-1, 62, 42, 'black');
    Rectangle(canvasId, x, y, 60, 20, 'red');
    Rectangle(canvasId, x, y+20, 60, 20, 'white');
}

