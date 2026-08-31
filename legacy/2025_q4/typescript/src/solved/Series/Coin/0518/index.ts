/*
Tags: Array, Dynamic Programming
#2: 2025-10-29 [33mins]
#1: 2025-10-27
---
給定一個整數陣列 coins，代表不同面額的硬幣，以及一個整數 amount，代表總金額。
請返回能湊成該金額的組合數。
如果無法用任何硬幣組合出該金額，則返回 $0$。
你可以假設每種硬幣都有無限多個。
答案保證能放入一個 $32$ 位元有符號整數。
*/
export function change(amount: number, coins: number[]): number {
  return change_2(amount, coins)
}
function change_2(amount: number, coins: number[]): number {
  if (amount === 0) return 1
  const dp = new Array(amount + 1).fill(0)
  for (const c of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i > c) dp[i] += dp[i - c]
      else if (c === i) dp[i]++
    }
  }
  return dp[amount]
}

/*
我這題的想法是用「動態規劃（Dynamic Programming）」來記錄湊出每個金額的組合數。
首先，我建立一個長度為 amount + 1 的陣列 dp，其中 dp[i] 代表「湊出金額 i 的組合數」。
一開始除了 dp[0]，其他都初始化為 0。這裡 dp[0] 其實代表「金額為 0 時有 1 種組合（什麼都不拿）」，
但因為我在邏輯上直接處理 coin == i 的情況，所以沒有特別設定 dp[0] = 1。
接著我用兩層迴圈：
- 外層是每個 coin（代表硬幣面額）
- 內層從 i = coin 開始一路加到 amount
核心轉移式是：
  dp[i] += dp[i - coin]
代表：如果我要湊出金額 i，我可以用一個面額 coin 的硬幣，
然後剩下的金額 i - coin 看有幾種方法可以湊出，就加上去。
另外，我在 i === coin 的情況下多加一個：
  dp[i] += 1
代表剛好用一枚硬幣 coin 就能湊出這個金額（例如 coin = 5, i = 5）。
整體結束後，dp[amount] 就是湊出該金額的所有組合數。
時間複雜度：O(n * amount)，其中 n 是硬幣種類數。
空間複雜度：O(amount)，因為只需要一維 dp 陣列。
這個寫法的重點在於「每個硬幣只能影響之後的金額」，確保組合不會重複計算順序。
*/
function change_1(amount: number, coins: number[]): number {
  if (amount === 0) return 1
  const dp: number[] = new Array(amount + 1).fill(0)
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      if (i === coin) dp[i] += 1
      dp[i] += dp[i - coin]
    }
  }
  return dp[amount]
}
