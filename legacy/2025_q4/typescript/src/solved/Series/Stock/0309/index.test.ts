import { maxProfit } from '.'

describe('Best Time to Buy and Sell Stock with Cooldown (LeetCode 309)', () => {
  test('範例 1: 含冷卻日的最佳情境', () => {
    expect(maxProfit([1, 2, 3, 0, 2])).toBe(3)
  })

  test('範例 2: 只有一天', () => {
    expect(maxProfit([1])).toBe(0)
  })

  test('持續上漲情況', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
    // 沒必要冷卻，一路漲
  })

  test('持續下跌情況', () => {
    expect(maxProfit([5, 4, 3, 2, 1])).toBe(0)
  })

  test('漲跌混合含冷卻期', () => {
    expect(maxProfit([2, 1, 4, 5, 2, 9, 7])).toBe(10)
    // 可能是 (1→5=4) + 冷卻 + (2→9=7)，實際最大約10
  })

  test('間隔上漲需要冷卻', () => {
    expect(maxProfit([1, 2, 3, 0, 2, 3, 0, 2])).toBe(5)
    // 多次 [買, 賣, 冷卻, 買, 賣] 循環
  })

  test('波動但無法利用冷卻期賺更多', () => {
    expect(maxProfit([6, 1, 3, 2, 4, 7])).toBe(6)
    // (1→3=2) + 冷卻 + (2→7=5) => 7 但冷卻影響結果實際約6
  })
})
