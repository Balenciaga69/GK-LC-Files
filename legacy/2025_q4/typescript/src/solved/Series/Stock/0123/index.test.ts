// maxProfitIII.test.ts
import { maxProfit } from '.'

describe('Best Time to Buy and Sell Stock III', () => {
  test('範例 1: 經典兩次交易案例', () => {
    expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(6)
  })

  test('範例 2: 單一長上升趨勢', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
  })

  test('範例 3: 持續下跌', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })

  test('只有一筆資料', () => {
    expect(maxProfit([5])).toBe(0)
  })

  test('兩次上漲波段', () => {
    expect(maxProfit([2, 1, 4, 5, 2, 9, 7])).toBe(11)
    // (1→5 = 4) + (2→9 = 7) = 11
  })

  test('多次漲跌但只能選兩段', () => {
    expect(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0])).toBe(13)
    // (1→7 = 6) + (2→9 = 7) = 13
  })
})
