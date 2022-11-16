/**
 * @vitest-environment jsdom
 */

import { test, expect } from "vitest";
import CountingEngine from "../counting-engine.js";
import Renderer from '../renderer.js';

test('Renderer draws inline style block', () => {
    let root = document.createElement('div');
    var renderer = new Renderer(root);
    let engine = new CountingEngine(0,0);
    renderer.render(engine);
    expect(root.querySelectorAll("style").length).toBe(1);
});

test('Renderer draws reset button', () => {
    let root = document.createElement('div');
    var renderer = new Renderer(root);
    let engine = new CountingEngine(0,0);
    renderer.render(engine);
    let button = root.querySelector("button#reset-button");
    expect(button).not.toBe(null);
    expect(button.innerHTML).toBe('RESET');
});
