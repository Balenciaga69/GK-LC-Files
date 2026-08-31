/*
# 703. 資料流中的第 K 大元素 (Kth Largest Element in a Stream)
* ## 題目說明
* 設計一個類 KthLargest，初始化時給定整數 k 和整數陣列 nums。
* 每次呼叫 add(val) 方法時，返回目前資料流中第 k 大的元素。
* ---
* ### 範例 1：
* 輸入：k = 3, nums = [4,5,8,2]
* 操作：add(3), add(5), add(10), add(9), add(4)
* 輸出：[4,5,5,8,8]
* ---
* ### 限制條件：
* 1 <= k <= 10^4
* 0 <= nums.length <= 10^4
* -10^4 <= val <= 10^4
* ---
* ## 思路提示：
* 用最小堆維護 k 個最大元素，堆頂即為第 k 大。
*/

export class KthLargest {
  constructor(k: number, nums: number[]) {
    // 初始化
  }
  add(val: number): number {
    // 實作見 test case
    return 0
  }
}
