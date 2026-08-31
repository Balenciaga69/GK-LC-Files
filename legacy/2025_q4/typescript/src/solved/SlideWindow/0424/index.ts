/*
#2: 2025-10-30 [27mins]
#1: 2025-10-25
---
424. 替换后的最长重复字符
給定一個字串 s，以及一個整數 k。
你可以選擇字串中的任意一個字元，並將它改成任何其他的大寫英文字母。
你最多可以進行這樣的操作 k 次。
請回傳在執行上述操作後，所能得到的由相同字母組成的最長子字串的長度。
1 <= s.length <= 105
s consists of only uppercase English Letters.
0 <= k <= s.length
*/
export function characterReplacement(s: string, k: number): number {
  return characterReplacement_2(s, k)
}
export function characterReplacement_2(s: string, k: number): number {
  if (s.length < 2) return s.length
  const n = s.length
  const map = new Map<string, number>()
  let l = 0
  let maxLength = 0
  for (let r = 0; r < n; r++) {
    // ss(SubString) 裡面能容許 額外有 k 個不同的值
    // 我要盤點這個 ss 誰是最多次的
    // 最高頻數字 + K < ssLen 代表空間不夠
    map.set(s[r], map.has(s[r]) ? map.get(s[r])! + 1 : 1)
    while (k < r - l + 1 - getMaxTimes(map)) {
      map.set(s[l], map.has(s[l]) ? map.get(s[l])! - 1 : 1)
      l++
    }
    maxLength = Math.max(maxLength, r - l + 1)
  }
  return maxLength
}
const getMaxTimes = (map: Map<string, number>) => {
  let maxTimes = 0
  map.forEach((times) => {
    maxTimes = Math.max(maxTimes, times)
  })
  return maxTimes
}

export function characterReplacement_1(s: string, k: number): number {
  if (s.length < 2) return s.length
  const map = new Map<string, number>()
  const get = (key: string) => (map.has(key) ? map.get(key)! : 0)
  let l = 0
  let maxLen = 0
  for (let r = 0; r < s.length; r++) {
    // 向右擴張
    const ch = s[r]
    let maxCount = 0
    map.set(ch, get(ch) + 1)
    map.forEach((n) => (maxCount = Math.max(maxCount, n)))
    while (r - l + 1 > k + maxCount) {
      // 當前視窗單字數 > 可容忍範圍
      map.set(s[l], get(s[l]) - 1)
      l++
    }
    maxLen = Math.max(maxLen, r - l + 1)
  }
  return maxLen
}
/*
可以將中間的一個 'A' 改成 'B'，得到 "AABBBBA"。
此時 "BBBB" 是最長的連續相同字母子字串，長度為 4。
也可能有其他方法能達到相同結果。
---
我這題是用 sliding window（滑動視窗） 的方式來解。
題目的目標是：找到最長的一段子字串，使得只要我更動其中至多 k 個字元，就能讓整段都變成相同的字母。
---
當目前視窗的長度 (r - l + 1) 減去 maxCount 大於 k 時，
表示我需要改變的字母數量超過允許值，因此左邊界 l 就要往右縮小。
---
時間複雜度：O(26 × n)
因為每次右指針前進時，我會遍歷 Map 來找出最大出現次數（雖然最多只會有 26 種英文字母）。
所以實際上仍是線性時間。
---
空間複雜度：O(1)
Map 只會記錄 26 種字母的出現次數，因此空間是常數級別。
---
目前每次都重新掃 Map 找最大值，其實可以只在每次新增字母時計算新的 maxCount，不用重掃。
這樣時間複雜度能降到嚴格的 O(n)。
整體邏輯不變，但效能更好。
*/
