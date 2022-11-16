export default class CountingEngine {
    #count;
    #defaultValue;

    constructor(count, defaultValue) {
        this.#count = count;
        this.#defaultValue = defaultValue;
    }

    get count() {
        return this.#count;
    }

    increment() {
        this.#count++;
    }

    decrement() {
        this.#count--;
    }

    reset() {
        this.#count = this.#defaultValue;
    }
}