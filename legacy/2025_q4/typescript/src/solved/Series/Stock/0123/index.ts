/*
#2: 2025-10-28 [6 mins]
#1: 2025-10-26 [21 mins]
---
LeetCode: 123. 买卖股票的最佳时机III
給定一個整數陣列 prices，其中第 i 個元素代表第 i 天的股票價格。
你最多只能進行 兩次交易。
每次交易都包含一次 買入 和一次 賣出。
（你必須先賣出手上的股票，才能進行下一次買入）
請回傳你能獲得的 最大利潤。
---
輸入: prices = [3,3,5,0,0,3,1,4]
輸出: 6
說明:
在價格 = 0 時買入，在價格 = 3 時賣出 → 獲利 3
在價格 = 1 時買入，在價格 = 4 時賣出 → 獲利 3
總獲利 = 6
---
輸入: prices = [1,2,3,4,5]
輸出: 4
說明:
在價格 = 1 時買入，在價格 = 5 時賣出 → 獲利 4
(第二次交易無法增加收益)
---
輸入: prices = [7,6,4,3,1]
輸出: 0
說明: 沒有任何上漲機會。
---
限制條件
1 <= prices.length <= 10^5
0 <= prices[i] <= 10^5
*/
export function maxProfit(prices: number[]): number {
  return maxProfit_2(prices)
}
export function maxProfit_2(prices: number[]): number {
  const n = prices.length
  if (n === 0) return 0
  let cash1 = 0
  let cash2 = 0
  let hold1 = -prices[0]
  let hold2 = -prices[0]
  for (let i = 1; i < n; i++) {
    // hold -> cash -> hold -> cash
    const p = prices[i]
    const nextHold1 = Math.max(hold1, -p)
    const nextCash1 = Math.max(cash1, hold1 + p)
    const nextHold2 = Math.max(hold2, cash1 - p)
    const nextCash2 = Math.max(cash2, hold2 + p)
    hold1 = nextHold1
    cash1 = nextCash1
    hold2 = nextHold2
    cash2 = nextCash2
  }
  return cash2
}
export function maxProfit_1(prices: number[]): number {
  const lastIdx = prices.length - 1
  const cash1: number[] = []
  const cash2: number[] = []
  const hold1: number[] = []
  const hold2: number[] = []

  cash1.push(0)
  cash2.push(0)
  hold1.push(-prices[0])
  hold2.push(-prices[0])
  for (let i = 1; i <= lastIdx; i++) {
    const price = prices[i]
    hold1[i] = Math.max(hold1[i - 1], -price)
    cash1[i] = Math.max(cash1[i - 1], hold1[i - 1] + price)
    hold2[i] = Math.max(hold2[i - 1], cash1[i - 1] - price)
    cash2[i] = Math.max(cash2[i - 1], hold2[i - 1] + price)
  }

  return cash2[lastIdx]
}
/*
個人思考筆記:
先買入 後賣出 x 2
不能同時買入與賣出
buy1 -> sell1 ->buy2 -> sell2

*/
