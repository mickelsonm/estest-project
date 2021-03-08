import { strict as assert } from 'assert'
import Calculator from '../src/calculator'

describe('calculator spec suite', () => {
  describe('add functionality', () => {
    it('should return 3 when 1 and 2 are added together', () => {
      const calc = new Calculator()
      const expected = 3
      const result = calc.add(2, 1)

      assert.strictEqual(expected, result)
    })
  })
})
