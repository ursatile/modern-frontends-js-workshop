/**
 * @vitest-environment jsdom
 */

import { vi, expect, test } from "vitest";
import MyCounterElement from "../counter.js";

test('increment handler calls increment on engine', () => {
    var counter = new MyCounterElement();
    counter.connectedCallback();
    counter.engine.increment = vi.fn();
    counter.incrementButtonClick();
    expect(counter.engine.increment).toHaveBeenCalled();
}); 

test('Pressing ArrowUp increments counter', () => {
    var counter = new MyCounterElement();
    counter.connectedCallback();
    counter.engine.increment = vi.fn();
    counter.handleKeydown({code: "ArrowUp"});
    expect(counter.engine.increment).toHaveBeenCalled();
});

test('Pressing ArrowDown decrements counter', () => {
    var counter = new MyCounterElement();
    counter.connectedCallback();
    counter.engine.decrement = vi.fn();
    counter.handleKeydown({code: "ArrowDown"});
    expect(counter.engine.decrement).toHaveBeenCalled();
});

