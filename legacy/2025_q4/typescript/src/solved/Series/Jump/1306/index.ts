/*
#1 2025-11-03 [13mins]
給定一個非負整數陣列 arr，你一開始位於索引 start。
當你在索引 i 時，你可以跳到 i + arr[i] 或 i - arr[i]。
請判斷是否可以到達陣列中任意一個值為 0 的索引。

注意：你不能跳出陣列範圍。

範例 1：
輸入：arr = [4,2,3,0,3,1,2], start = 5
輸出：true
解釋：
所有可以到達值為 0 的索引 3 的路徑：
index 5 -> index 4 -> index 1 -> index 3
index 5 -> index 6 -> index 4 -> index 1 -> index 3

範例 2：
輸入：arr = [4,2,3,0,3,1,2], start = 0
輸出：true
解釋：
一種到達值為 0 的索引 3 的路徑：
index 0 -> index 4 -> index 1 -> index 3

範例 3：
輸入：arr = [3,0,2,1,2], start = 2
輸出：false
解釋：沒有辦法到達值為 0 的索引 1。

限制：
1 <= arr.length <= 5 * 10^4
0 <= arr[i] < arr.length
0 <= start < arr.length
*/

// 這題更像一張 多點連結的圖 而不是真正的跳格子
export function canReach(arr: number[], start: number): boolean {
  const isInRange = (i: number) => i >= 0 && i <= arr.length - 1
  const queue: number[] = [start]
  const visited = new Set<number>([start])
  while (queue.length > 0) {
    const idx = queue.shift() // 從 queue 取當前 idx
    if (idx === undefined) return false // 吐出異常就結束
    if (arr[idx] === 0) return true // 到達終點結束
    const r = idx + arr[idx]
    const l = idx - arr[idx]
    if (!visited.has(r) && isInRange(r)) {
      visited.add(r)
      queue.push(r)
    }
    if (!visited.has(l) && isInRange(l)) {
      visited.add(l)
      queue.push(l)
    }
  }
  return false
}
