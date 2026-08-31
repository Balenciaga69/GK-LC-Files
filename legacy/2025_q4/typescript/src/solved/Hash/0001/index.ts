/*
Tags: Array, Hash Table
Date: 2025-10-25
TimeSpent: 5 mins
---
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
---
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */
export function twoSum(nums: number[], target: number): number[] {
  const valueToIndex = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]
    const complement = target - currentNum
    if (valueToIndex.has(complement)) {
      return [valueToIndex.get(complement) ?? 0, i]
    } else {
      valueToIndex.set(currentNum, i)
    }
  }
  return []
}
/*
我這題的想法是用一個 hash map（在 TypeScript 裡就是 Map<number, number>） 來記錄「數值對應到的索引」。
因為題目要找出兩個數，使它們相加等於目標值 target，
那就代表對每個元素 nums[i]，我們要知道「還差多少」才能湊到 target，也就是 complement = target - nums[i]。
---
這樣的寫法是因為暴力解法要用兩層迴圈 (O(n^2))，在資料量大時會超時。
用 Map 查找是 O(1)，所以整體效率提升到線性時間。
---
時間複雜度
O(n)：每個元素只進出一次 Map。
空間複雜度
O(n)：最壞情況下 Map 需要存下所有元素。
*/
