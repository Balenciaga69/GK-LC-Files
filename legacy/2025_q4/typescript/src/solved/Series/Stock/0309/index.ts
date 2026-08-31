/*
#2: 2025-10-29 [7mins]
#1: 2025-10-26
---
309. 买卖股票的最佳时机含冷冻期
給定一個整數陣列 prices，其中第 i 個元素代表第 i 天的股票價格。
你可以進行任意多次的交易（買入與賣出），
但需遵守以下規則：
不能同時進行多筆交易（必須先賣出才能再次買入）。
賣出後必須冷卻一天，也就是說，當天賣出股票後，隔天不能立即買入。
請計算你可以獲得的 最大利潤。
---
輸入: prices = [1,2,3,0,2]
輸出: 3
說明: 
最佳交易流程如下：
第 0 天買入 → 第 2 天賣出 → 第 3 天冷卻 → 第 4 天再買入並賣出
交易序列：[買, 賣, 冷卻, 買, 賣]
---
總利潤 = 3
輸入: prices = [1]
輸出: 0
說明: 只有一天，無法賣出。
---
限制條件
1 <= prices.length <= 5000
0 <= prices[i] <= 1000
*/
export function maxProfit(prices: number[]): number {
  return maxProfit_2(prices)
}
export function maxProfit_2(prices: number[]): number {
  // hold from [續抱、今天買入]
  // cash from [空手、昨天賣出]
  // sold from [昨天HOLD 今天賣的價格]
  let hold = -prices[0]
  let sold = 0
  let cash = 0
  prices.shift()
  for (const p of prices) {
    const nextHold = Math.max(hold, cash - p)
    const nextSold = hold + p
    const nextCash = Math.max(cash, sold)
    hold = nextHold
    sold = nextSold
    cash = nextCash
  }
  return Math.max(cash, sold)
}
export function maxProfit_1(prices: number[]): number {
  const n = prices.length
  if (n < 2) return 0
  const cash: number[] = [0]
  const hold: number[] = [-prices[0]]
  const sold: number[] = [0]
  for (let i = 1; i < n; i++) {
    const p = prices[i]
    hold.push(Math.max(hold[i - 1], cash[i - 1] - p))
    sold.push(hold[i - 1] + p)
    cash.push(Math.max(cash[i - 1], sold[i - 1]))
  }
  return Math.max(cash[n - 1], sold[n - 1])
}
