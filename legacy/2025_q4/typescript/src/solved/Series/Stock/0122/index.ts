/*
#2: 2025-10-28 [11 mins]
#1: 2025-10-26 [35 mins]
---
0122. 买卖股票的最佳时机II
給定一個整數陣列 prices，其中第 i 個元素代表第 i 天的股票價格。
你可以進行 多次買入與賣出操作，但前提是：
你在再次買入之前，必須先賣出前一支股票。
不能同時持有多支股票。
請你計算可以獲得的 最大利潤。
輸入: prices = [7,1,5,3,6,4]
輸出: 7
說明:
在價格 = 1 時買入，在價格 = 5 時賣出 → 獲利 4
在價格 = 3 時買入，在價格 = 6 時賣出 → 獲利 3
總獲利 = 4 + 3 = 7
輸入: prices = [1,2,3,4,5]
輸出: 4
說明: 每天都可以賺 1，共 4。
限制條件
1 <= prices.length <= 3 * 10^4
0 <= prices[i] <= 10^4
輸入: prices = [7,6,4,3,1]
輸出: 0
說明: 價格持續下跌，無法獲利。
*/
export function maxProfit(prices: number[]): number {
  return maxProfit_2(prices)
}

export function maxProfit_2(prices: number[]): number {
  if (prices.length === 0) return 0
  const n = prices.length
  let cash = 0
  let hold = -prices[0]
  for (let i = 1; i < n; i++) {
    const p = prices[i]
    const nextCash = Math.max(cash, hold + p)
    const nextHold = Math.max(hold, cash - p)
    cash = nextCash
    hold = nextHold
  }
  return cash
}

export function maxProfit_1(prices: number[]): number {
  if (prices.length === 0) return 0
  let cash = 0
  let hold = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    const newCash = Math.max(cash, hold + prices[i])
    const newHold = Math.max(hold, cash - prices[i])
    cash = newCash
    hold = newHold
  }
  return cash
}
/*
我把整個交易過程抽象成兩種狀態：
一個是 手上沒股票 (cash)，另一個是 手上有股票 (hold)。
每天這兩個狀態都會根據前一天的選擇來更新。
---
cash[i]：第 i 天結束時，手上沒有股票的最大獲利
hold[i]：第 i 天結束時，手上持有股票的最大獲利（會是負數或比 cash 小）
---
| Day | Price | cash | hold | 說明           |
| --- | ----- | ---- | ---- | ------------ |
| 1   | 7     | 0    | -7   | 第一天買入        |
| 2   | 1     | 0    | -1   | 昨天不買 今天以更低價買 |
| 3   | 5     | 4    | -1   | 今天賣出 賺 4     |
---
這是典型的動態規劃模型。
我記錄每天的兩種狀態，分別考慮 ‘持股’ 和 ‘不持股’ 的最大值，
用狀態轉移方程去累積整體最優解。
這個結構可以直接擴展到有手續費、有冷卻期、或有限交易次數的版本。
---
複雜度分析
時間複雜度：O(n)（只迴圈一次）
空間複雜度：O(n × 2)（兩個陣列）
---
其實我們只需要前一天的 cash 和 hold，
所以兩個陣列可以壓縮成兩個變數：
這樣就變成 O(1) 空間、O(n) 時間。
*/
