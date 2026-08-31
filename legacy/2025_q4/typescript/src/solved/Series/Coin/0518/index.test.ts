import { change } from '.'

describe('518. Coin Change II', () => {
  // 測試案例 1：基本案例，有多種組合
  test('Example 1: amount = 5, coins = [1, 2, 5]', () => {
    const amount = 5
    const coins = [1, 2, 5]
    // 組合:
    // 5 = 5
    // 5 = 2 + 2 + 1
    // 5 = 2 + 1 + 1 + 1
    // 5 = 1 + 1 + 1 + 1 + 1
    const expected = 4
    expect(change(amount, coins)).toBe(expected)
  })

  // 測試案例 2：無法組合的情況
  test('Example 2: amount = 3, coins = [2]', () => {
    const amount = 3
    const coins = [2]
    // 無法用 2 湊成 3
    const expected = 0
    expect(change(amount, coins)).toBe(expected)
  })

  // 測試案例 3：目標金額為 0，只有一種空組合
  test('Example 3: amount = 0, coins = [1, 2, 5]', () => {
    const amount = 0
    const coins = [1, 2, 5]
    // 湊成 0 的組合永遠只有一種 (空組合)
    const expected = 1
    expect(change(amount, coins)).toBe(expected)
  })

  // 測試案例 4：只有一種硬幣
  test('Case with single coin type (amount = 10, coins = [5])', () => {
    const amount = 10
    const coins = [5]
    // 5 + 5
    const expected = 1
    expect(change(amount, coins)).toBe(expected)
  })

  // 測試案例 6：硬幣數組為空 (應返回 0，除非 amount = 0)
  test('Case with empty coins array and non-zero amount', () => {
    const amount = 5
    const coins: number[] = []
    const expected = 0
    expect(change(amount, coins)).toBe(expected)
  })

  // 測試案例 7：硬幣數組為空且 amount = 0
  test('Case with empty coins array and zero amount', () => {
    const amount = 0
    const coins: number[] = []
    const expected = 1
    expect(change(amount, coins)).toBe(expected)
  })

  test('Example 8: amount = 7, coins = [2, 5]', () => {
    const amount = 7
    const coins = [2, 5]
    const expected = 1
    expect(change(amount, coins)).toBe(expected)
  })
})
