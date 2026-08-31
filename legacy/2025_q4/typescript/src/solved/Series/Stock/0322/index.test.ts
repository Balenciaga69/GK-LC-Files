// maxProfitFee.test.ts
import { maxProfit } from '.'

describe('Best Time to Buy and Sell Stock with Transaction Fee (LeetCode 714)', () => {
  test('範例 1: 含手續費的多次交易', () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8)
  })

  test('範例 2: 另一組手續費情況', () => {
    expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toBe(6)
  })

  test('持續上漲', () => {
    expect(maxProfit([1, 2, 3, 4, 5, 6], 1)).toBe(4)
    // (1→6) 獲利 (6 - 1 - 1) = 4
  })

  test('持續下跌', () => {
    expect(maxProfit([6, 5, 4, 3, 2, 1], 1)).toBe(0)
  })

  test('波動但手續費影響策略', () => {
    expect(maxProfit([1, 5, 3, 8, 4, 9], 2)).toBe(8)
    // (1→5=2) + (3→8=3) + (4→9=3) = 8
  })

  test('高手續費導致無交易', () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 10)).toBe(0)
  })

  test('僅一天資料', () => {
    expect(maxProfit([5], 2)).toBe(0)
  })
})
