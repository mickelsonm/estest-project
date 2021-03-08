"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const calculator_1 = require("../src/calculator");
describe('calculator spec suite', () => {
    describe('add functionality', () => {
        it('should return 3 when 1 and 2 are added together', () => {
            const calc = new calculator_1.default();
            const expected = 3;
            const result = calc.add(2, 1);
            assert_1.strict.strictEqual(expected, result);
        });
    });
});
//# sourceMappingURL=Calculator.spec.js.map