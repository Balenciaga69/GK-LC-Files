/*
#1: 2025-10-29 [2mins]
#1: 2025-10-26
---
給定一個整數陣列 prices，其中 prices[i] 代表第 i 天的股票價格，
以及一個整數 fee 代表每筆交易的手續費。
你可以進行任意多次交易（買入與賣出），
但每筆交易都會被扣除一次手續費（買入時不扣，賣出時扣）。
條件如下：
你一次只能持有一支股票（賣出後才能再買）。
每次完成買賣動作後，會收取一次 fee。
請回傳你可以獲得的 最大利潤。
---
輸入: prices = [1,3,2,8,4,9], fee = 2
輸出: 8
說明:
最佳交易策略如下：
- 在價格 1 時買入，在價格 8 時賣出 → 獲利 (8 - 1 - 2) = 5
- 在價格 4 時買入，在價格 9 時賣出 → 獲利 (9 - 4 - 2) = 3
總利潤 = 5 + 3 = 8
---
輸入: prices = [1,3,7,5,10,3], fee = 3
輸出: 6
說明:
最佳策略:
(1→7) 獲利 3, (5→10) 獲利 3
總利潤 = 6
---
限制條件
1 <= prices.length <= 5000
0 <= prices[i] <= 1000
*/
export function maxProfit(prices: number[], fee: number): number {
  return maxProfit_2(prices, fee)
}
export function maxProfit_2(prices: number[], fee: number): number {
  let cash = 0
  let hold = -prices[0]
  prices.shift()
  for (const p of prices) {
    const nextCash = Math.max(cash, hold + p - fee)
    const nextHold = Math.max(hold, cash - p)
    cash = nextCash
    hold = nextHold
  }
  return cash
}
export function maxProfit_1(prices: number[], fee: number): number {
  let cash = 0
  let hold = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    const nextCash = Math.max(cash, hold + prices[i] - fee)
    const nextHold = Math.max(hold, cash - prices[i])
    cash = nextCash
    hold = nextHold
  }
  return cash
}
