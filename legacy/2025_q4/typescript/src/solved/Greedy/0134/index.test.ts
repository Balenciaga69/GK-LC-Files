import { canCompleteCircuit } from '.'
describe('134. Gas Station', () => {
  test('範例 1', () => {
    expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3)
  })
  test('範例 2', () => {
    expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1)
  })
  test('範例 3', () => {
    expect(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])).toBe(4)
  })
  test('整體油量不足應該回傳 -1', () => {
    expect(canCompleteCircuit([2, 2, 2], [3, 3, 3])).toBe(-1)
  })
  test('單一加油站可通過', () => {
    expect(canCompleteCircuit([5], [4])).toBe(0)
  })
})
