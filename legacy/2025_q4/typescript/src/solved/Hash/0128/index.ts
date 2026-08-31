/*
Tags: Array, Hash Table, Union Find
Date: 2025-10-25
TimeSpent: 60 mins
---
Given an [unsorted array] of integers nums, return the length of the [longest consecutive elements sequence].
You must write an algorithm that runs in O(n) time.
Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/
export function longestConsecutive(nums: number[]): number {
  const set = new Set<number>()
  nums.forEach((num) => {
    set.add(num)
  })
  let maxLength = 0
  set.forEach((num) => {
    if (!set.has(num - 1)) {
      let curr = num
      let currLength = 1
      while (set.has(curr + currLength)) {
        currLength++
      }
      maxLength = Math.max(currLength, maxLength)
    }
  })
  return maxLength
}
/*
題目要求 O(n)，所以我選擇用 Set 來快速查找是否存在某個數。
先把所有數放進 Set，這樣查找 O(1)。接著只從『序列的起點』開始往右擴展，確保每個元素只會被訪問一次。
對每個數 num，如果 num - 1 不存在於集合中，代表它是某個連續序列的起點。
從這個起點開始往後加 (num + 1, num + 2 ...)，直到不連續為止，計算長度。
這樣每個數只被當作起點一次，不會重複計算。
插入 Set 是 O(n)，每個數最多被檢查兩次（一次當起點、一次被查存在性），
所以整體仍是 O(n)。
這符合題目『只能觸發 n 次』的要求。
排序是 O(n log n)，不符合題目要求。
我用 Set 直接跳過排序這一步，以空間換時間，維持 O(n)。
這解法簡潔、時間效率高，也能處理負數和重複元素。
核心是：用 Set 讓查找連續關係變成 O(1)，只從連續序列開頭擴展，避免重複遍歷。
*/
