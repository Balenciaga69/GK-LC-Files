/*
#2: 2025-10-28 [4 mins]
#1: 2025-10-26 [3 mins]
TimeSpent: 3 mins
---
121. 買賣股票的最佳時機
給定一個整數陣列 prices，其中第 i 個元素代表在第 i 天的股票價格。
你只能選擇 某一天買入一支股票，並選擇 在未來的某一天賣出該股票（買入日必須早於賣出日），
請你計算出能獲得的 最大利潤。
如果無法獲得任何利潤（也就是價格持續下降），請回傳 0。
輸入: prices = [7,1,5,3,6,4]
輸出: 5
說明: 在第 2 天 (價格 = 1) 買入，在第 5 天 (價格 = 6) 賣出，最大利潤 = 6 - 1 = 5。
注意：不能在第 5 天再買，因為必須先賣再買。
輸入: prices = [7,6,4,3,1]
輸出: 0
說明: 股票價格持續下跌，無法獲得利潤。
限制條件
1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
*/
export function maxProfit(prices: number[]): number {
  return maxProfit_2(prices)
}

export function maxProfit_1(prices: number[]): number {
  let maxProfit = 0
  let minPrice = Infinity
  for (const price of prices) {
    minPrice = Math.min(price, minPrice)
    maxProfit = Math.max(price - minPrice, maxProfit)
  }
  return maxProfit
}

export function maxProfit_2(prices: number[]): number {
  const n = prices.length
  let maxProfit = Number.NEGATIVE_INFINITY
  let minPrice = Number.POSITIVE_INFINITY
  for (let i = 0; i < n; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
  }
  return maxProfit
}
/*
這題是要找出在股票價格陣列中，買進和賣出一次所能獲得的最大利潤。
我採用的是 一次遍歷 (One Pass) 的線性解法。
我先觀察到：
如果我在第 i 天賣出股票，最好的買入時機一定是 在 i 之前的最低價。
所以我們只需要在遍歷時，同步紀錄「目前為止最低價」，並且在每一天試算「如果今天賣出能賺多少」。
### 複雜度分析
- **時間複雜度**：O(n) 因為我們只遍歷陣列一次。
- **空間複雜度**：O(1) 只用了兩個變數 `minPrice` 和 `maxProfit`。
*/
/**
 * 我一開始的直覺是，既然要找最大獲利，那我可以嘗試所有買入與賣出組合，看看哪一組差價最大。
 */
function maxProfitNoobVersion(prices: number[]): number {
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < i; j++) {
      maxProfit = Math.max(maxProfit, prices[i] - prices[j])
    }
  }
  return maxProfit
}
