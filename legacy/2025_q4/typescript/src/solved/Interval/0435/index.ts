/*
#1: 2025-11-02 [8mins]
 * # 435. 不重疊的區間 (Non-overlapping Intervals)
 * ## 🀄 題目說明
 * 給你一個由區間組成的陣列 `intervals`，其中每個區間為 `[start_i, end_i]`。
 * 
 * 你需要**移除最少數量的區間**，使得剩下的區間**互不重疊**。
 * 
 * 回傳需要移除的最少區間數。
 * ---
 * ### 範例 1：
 * ```
 * 輸入：intervals = [[1,2],[2,3],[3,4],[1,3]]
 * 輸出：1
 * 解釋：移除 [1,3] 後，剩下 [[1,2],[2,3],[3,4]] 即不重疊。
 * ```
 * ### 範例 2：
 * ```
 * 輸入：intervals = [[1,2],[1,2],[1,2]]
 * 輸出：2
 * 解釋：必須移除兩個，才不重疊。
 * ```
 * ### 範例 3：
 * ```
 * 輸入：intervals = [[1,2],[2,3]]
 * 輸出：0
 * 解釋：這兩個區間端點相接，但不重疊。
 * ```
 * 
 * ---
 * 
 * ### 限制條件：
 * ```
 * 1 <= intervals.length <= 10^5
 * intervals[i].length == 2
 * -5 * 10^4 <= start_i < end_i <= 5 * 10^4
 * ```
* 
 * ---
 * ## 💡 思路提示：
 * 這是一題典型的「區間貪心問題 (Interval Greedy)」。
 * 
 * 我們希望保留最多的不重疊區間，等價於「移除最少」的區間。
 * 
 * 👉 做法：
 * 1. 先依 `end` 進行排序（結束時間小的在前）。
 * 2. 每次選取一個結束最早、且不與前一個選中的區間重疊的區間。
 * 3. 計算沒被選中的數量，就是要移除的最少區間數。
 * ## ⏱️ 時間與空間複雜度：
 * - 時間複雜度：O(n log n)（因為要排序）
 * - 空間複雜度：O(1)
 */

export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1] || a[0] - b[0])
  let min = -Infinity
  let delCount = 0
  for (const a of intervals) {
    if (a[0] >= min) min = a[1]
    else delCount++
  }
  return delCount
}
