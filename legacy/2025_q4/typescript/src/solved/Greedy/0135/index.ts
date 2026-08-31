/*
Tags: Greedy, Array, Simulation
Date: 2025-10-30
---
題目名稱：135. Candy
題目說明：
有 n 位小孩，每個小孩有一個整數 rating 表示他們的評分。
你要分配糖果給他們，遵守以下規則：
1. 每個小孩至少要有一顆糖。
2. 評分較高的小孩必須比相鄰小孩拿到更多糖。
請回傳讓規則成立所需的最少糖果數量。
---
範例：
輸入: ratings = [1,0,2]
輸出: 5
解釋: 分配 [2,1,2]，共 5 顆。
輸入: ratings = [1,2,2]
輸出: 4
解釋: 分配 [1,2,1]，共 4 顆。
---
限制條件：
1 <= ratings.length <= 2 * 10^4
0 <= ratings[i] <= 10^4
*/
export function candy(ratings: number[]): number {
  const n = ratings.length
  const left = new Array<number>(n).fill(1)
  const right = new Array<number>(n).fill(1)
  // left n
  for (let i = 0; i < n - 1; i++) {
    if (ratings[i + 1] > ratings[i]) left[i + 1] = left[i] + 1
  }
  // right n
  for (let i = n - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) right[i - 1] = right[i] + 1
  }
  // final time n
  return ratings.reduce((acc, cur, idx) => acc + Math.max(left[idx], right[idx]), 0)
}
