/*
Tags: Array, Dynamic Programming, Greedy
#2: 2025-10-29 [5mins]
#1: 2025-10-27
---
給你一個整數陣列 `coins`，代表不同面額的硬幣，以及一個整數 `amount`，代表目標金額。
請回傳「湊出該金額所需最少硬幣數量」。
如果無法湊出該金額，回傳 -1。
你可以假設每種硬幣數量無限。
---
範例 1：
輸入: coins = [1, 2, 5], amount = 11
輸出: 3
解釋: 11 = 5 + 5 + 1
---
範例 2：
輸入: coins = [2], amount = 3
輸出: -1
---
範例 3：
輸入: coins = [1], amount = 0
輸出: 0
---
限制條件：
1 <= coins.length <= 12
1 <= coins[i] <= 2^31 - 1
0 <= amount <= 10^4
*/
export function coinChange(coins: number[], amount: number): number {
  return coinChange_2(coins, amount)
}
function coinChange_2(coins: number[], amount: number): number {
  if (amount === 0) return 0
  const dp = new Array(amount + 1).fill(Number.MAX_VALUE)
  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (c === i) dp[i] = 1
      if (i > c) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1)
      }
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount]
}
function coinChange_1(coins: number[], amount: number): number {
  if (amount === 0) return 0
  const dp: number[] = new Array(amount + 1).fill(Number.MAX_VALUE)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin) {
        //  7元 不能用 10元硬幣換
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount]
}
// [2,5],8
// 1 : x
// 2 : 1
// 3 : x
// 4 : d[2]+1
// 5 : 1
// 6 : dp[1]+1 or dp[4]+1
// 7 : dp[5]+1 or dp[2]+1
// 8 : dp[3]+1 or
/*
我這題的思路是典型的「動態規劃（Dynamic Programming）」解法，重點是找出最少硬幣數量。
我先建立一個 dp 陣列，dp[i] 代表「湊出金額 i 所需的最少硬幣數」。
一開始除了 dp[0] = 0（因為金額為 0 不需要任何硬幣），其他都初始化成一個非常大的值（Number.MAX_VALUE），
表示暫時還湊不出。
接著我從 1 一路算到 amount，每次都嘗試用每一種硬幣去湊：
- 如果目前金額 i 比硬幣面額 coin 大或相等（i >= coin），代表這個硬幣有機會湊出 i。
- 那我就看看 dp[i - coin]（湊出剩下的金額）需要幾枚硬幣，
  再加上這一枚 coin，自然就是 dp[i - coin] + 1。
- 取所有可能硬幣中的最小值作為 dp[i]。
例如：
假設 coins = [2,5], amount = 8，
那 dp 的推進過程大概是：
- dp[2] = 1 （一枚 2）
- dp[4] = dp[2] + 1 = 2
- dp[5] = 1 （一枚 5）
- dp[6] = dp[4] + 1 = 3
- dp[7] = dp[5] + 1 = 2
- dp[8] = dp[6] + 1 = 4 或 dp[3]+1（無效），最後取最小 => 4
最後檢查 dp[amount] 是否還是初始值（代表沒辦法湊出），
如果是，就回傳 -1，否則回傳 dp[amount]。
這題的本質是「組合問題」，但順序不重要（只看湊法，不看排列），
而且是「最少數量」問題，所以每一步都取最小值。
時間複雜度：O(n * amount)，其中 n 是硬幣種類數。
空間複雜度：O(amount)，因為我們只用了 1 維陣列來記錄狀態。
這種寫法是經典的自底向上 DP，也是 LeetCode #322 的標準解法。
*/
