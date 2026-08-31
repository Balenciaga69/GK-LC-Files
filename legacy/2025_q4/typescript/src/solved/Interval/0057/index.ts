/*
未完成，我們需要一個更好版本(跑三次while那個版本)
# 2025-11-02 [45mins]
給你一個由「不重疊」的區間組成的陣列 intervals，其中
intervals[i] = [start_i, end_i] 表示第 i 個區間的起點與終點，
而且這些區間已經依照 start_i 由小到大排序。
同時，給你一個新的區間 newInterval = [start, end]。
請你把 newInterval 插入到原本的 intervals 中，使得：
插入後的區間仍然依照起點遞增排序；
並且如果出現重疊區間，要將它們合併成一個大的區間。
你不需要在原陣列上修改（可以建立新的陣列回傳）。
---
輸入: intervals = [[1,3],[6,9]], newInterval = [2,5]
輸出: [[1,5],[6,9]]
---
輸入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
輸出: [[1,2],[3,10],[12,16]]
解釋: 因為 newInterval = [4,8] 與 [3,5],[6,7],[8,10] 有重疊，合併後變成 [3,10]。
---
0 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= start_i <= end_i <= 10^5
intervals 按照 start_i 遞增排序
newInterval.length == 2
0 <= start <= end <= 10^5
---
*/
export function insert(intervals: number[][], newInterval: number[]): number[][] {
  const n = intervals.length
  if (n === 0) return [newInterval]
  const result: number[][] = []
  if (newInterval[1] < intervals[0][0]) return [newInterval, ...intervals]
  if (newInterval[0] > intervals[n - 1][1]) return [...intervals, newInterval]
  let nextL = Infinity
  let nextR = -Infinity
  let inserted = false

  for (const ary of intervals) {
    // 在左側
    if (ary[1] < newInterval[0]) {
      result.push(ary)
      // 更右側了
    } else if (ary[0] > newInterval[1]) {
      if (!inserted) {
        result.push(newInterval)
        inserted = true
      }
      result.push(ary)
    } else {
      nextL = Math.min(ary[0], newInterval[0], nextL)
      nextR = Math.max(ary[1], newInterval[1], nextR)
      if (!inserted) inserted = true
      else result.pop()
      result.push([nextL, nextR])
    }
  }
  return result
}
