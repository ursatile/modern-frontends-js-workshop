import { describe, test, expect } from 'vitest';
import CountingEngine from '../counting-engine.js';

test('it works', () => {
    expect(1).toBe(1);
});

describe('engine initialises with correct count', () => {
    let values = [0,5,10,15,20];
    test.each(values)('engine initialises with %d correctly', (count) => {
        let e = new CountingEngine(count,10);
        expect(e.count).toBe(count);
    });
});

describe('engine resets to correct value', () => {
    let values = [0,5,10,15,20];
    test.each(values)('engine resets when default is %d', (value) => {
        let e = new CountingEngine(0,value);
        e.reset();
        expect(e.count).toBe(value);
    });
});

describe('increment engine works', () => {
    let values = [0,5,10,15,20];
    test.each(values)('when default is %d', (value) => {
        let e = new CountingEngine(value,value);
        e.increment();
        expect(e.count).toBe(value + 1);
    });
});


