import { thirdMax } from './index'

describe('thirdMax', () => {
  test('should return the third maximum number', () => {
    expect(thirdMax([3, 2, 1])).toBe(1)
    expect(thirdMax([1, 2])).toBe(2)
    expect(thirdMax([2, 2, 3, 1])).toBe(1)
  })
})
