/*
#2: 2025-11-03 [3mins]
#1: 2025-11-03 [3mins]
55. Jump Game
給定一個整數陣列 nums。你一開始站在陣列的第一個索引位置，每個元素代表你在該位置可以跳躍的最大長度。

如果你能到達陣列的最後一個索引，請回傳 true，否則回傳 false。

範例 1：
輸入：nums = [2,3,1,1,4]
輸出：true
解釋：從索引 0 跳 1 步到索引 1，然後跳 3 步到最後一格。

範例 2：
輸入：nums = [3,2,1,0,4]
輸出：false
解釋：無論怎麼跳都會到達索引 3，而它的最大跳躍長度是 0，無法到達最後一格。

限制：
1 <= nums.length <= 10^4
0 <= nums[i] <= 10^5
*/
export function canJump(nums: number[]): boolean {
  return canJump1(nums)
}
export function canJump2(nums: number[]): boolean {
  let canReachMaxIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > canReachMaxIndex) return false
    const i_move = nums[i] + i
    canReachMaxIndex = Math.max(canReachMaxIndex, i_move)
  }
  return canReachMaxIndex >= nums.length - 1
}
export function canJump1(nums: number[]): boolean {
  let canReachMaxIndex = 0
  for (let i = 0; i < nums.length - 1; i++) {
    // 在該階段可跳躍範圍內 評估下一個最遠距離是...
    const i_move = nums[i] + i
    if (i <= canReachMaxIndex) {
      canReachMaxIndex = Math.max(canReachMaxIndex, i_move)
    }
  }
  return canReachMaxIndex >= nums.length - 1
}
