// maxProfitIV.test.ts
import { maxProfit } from '.'

describe('Best Time to Buy and Sell Stock IV', () => {
  test('範例 1: 簡單兩次交易', () => {
    expect(maxProfit(2, [2, 4, 1])).toBe(2)
  })

  test('範例 2: 兩次最佳機會', () => {
    expect(maxProfit(2, [3, 2, 6, 5, 0, 3])).toBe(7)
  })

  test('k 大於交易可能數', () => {
    expect(maxProfit(10, [1, 2, 3, 4, 5])).toBe(4)
    // 等同於無限次交易情況
  })

  test('持續下跌', () => {
    expect(maxProfit(3, [9, 8, 7, 6, 5])).toBe(0)
  })

  test('單一價格', () => {
    expect(maxProfit(1, [5])).toBe(0)
  })

  test('多次波動', () => {
    expect(maxProfit(3, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0])).toBe(15)
    // 可能的最佳交易組合:
    // (1→4=3) + (2→7=5) + (2→9=7) = 15
  })

  test('k = 1 等價於第一題', () => {
    expect(maxProfit(1, [7, 1, 5, 3, 6, 4])).toBe(5)
  })
})
