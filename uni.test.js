const { add } = require('./math');

describe('Math Functions', () => {
    test('add should correctly add two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, -1)).toBe(-2);
        expect(add(5, 0)).toBe(5);
    });
});
