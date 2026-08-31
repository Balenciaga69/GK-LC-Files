/*
Tags: Array, Dynamic Programming
#2: 2025-10-29 [14min 放棄]
#1: 2025-10-26
---
給定整數 k 和整數陣列 prices，
其中第 i 個元素代表第 i 天的股票價格。
你最多可以進行 k 次交易，
每次交易都包含一次 買入 和一次 賣出。
（你必須先賣出前一筆股票後，才能進行下一筆買入）
請計算你可以獲得的 最大利潤。
---
輸入: k = 2, prices = [2,4,1]
輸出: 2
說明:
在價格 = 2 時買入，價格 = 4 時賣出 → 獲利 2
---
輸入: k = 2, prices = [3,2,6,5,0,3]
輸出: 7
說明:
(2 → 6 = 4) + (0 → 3 = 3) = 7
---
限制條件
1 <= k <= 100
1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
*/
export function maxProfit(k: number, prices: number[]): number {
  return maxProfit_2(k, prices)
}
export function maxProfit_2(k: number, prices: number[]): number {
  // hold k = hold k-1 or cash k-1 - p
  // cash k = cash k-1 or hold k-1 + p
  const n = prices.length
  const hold = Array(k + 1).fill(-prices[0])
  const cash = Array(k + 1).fill(0)
  for (let i = 1; i < n; i++) {
    const p = prices[i]
    for (let j = 1; j <= k; j++) {
      cash[j] = Math.max(cash[j], hold[j] + p)
      hold[j] = Math.max(hold[j], cash[j - 1] - p)
    }
  }
  return cash[k]
}
//----
export function maxProfit_1(k: number, prices: number[]): number {
  const n = prices.length
  if (n === 0) return 0
  if (k >= n / 2) return maxProfitGreedy(prices)
  const hold: number[] = []
  const cash: number[] = []
  for (let i = 0; i <= k; i++) {
    cash.push(0)
    hold.push(-prices[0])
  }
  for (const price of prices) {
    for (let i = 1; i <= k; i++) {
      const newHold = Math.max(hold[i], cash[i - 1] - price)
      const newCash = Math.max(cash[i], hold[i] + price)
      hold[i] = newHold
      cash[i] = newCash
    }
  }
  return cash[k]
}
function maxProfitGreedy(prices: number[]): number {
  if (prices.length === 0) return 0
  let cash = 0 // 不持有股票的最大利潤
  let hold = -prices[0] // 持有股票的最大利潤
  for (let i = 1; i < prices.length; i++) {
    const newCash = Math.max(cash, hold + prices[i])
    const newHold = Math.max(hold, cash - prices[i])
    cash = newCash
    hold = newHold
  }
  return cash
}
