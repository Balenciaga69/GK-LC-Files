// maxProfit.test.ts

import { maxProfit } from '.'

describe('Best Time to Buy and Sell Stock', () => {
  test('範例 1: 正常上漲情況', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })

  test('範例 2: 持續下跌', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })

  test('單一元素', () => {
    expect(maxProfit([5])).toBe(0)
  })

  test('只上漲不下跌', () => {
    expect(maxProfit([1, 2, 3, 4, 5, 6])).toBe(5)
  })

  test('波動情況', () => {
    expect(maxProfit([2, 4, 1, 7])).toBe(6)
  })

  test('重複價格', () => {
    expect(maxProfit([3, 3, 3, 3])).toBe(0)
  })

  test('局部高點後再上升', () => {
    expect(maxProfit([2, 1, 4, 5, 2, 9, 7])).toBe(8)
  })
})
