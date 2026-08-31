// https://leetcode.com/problems/house-robber/description/
function rob(nums: number[]): number {
  const n = nums.length
  if (n < 2) return nums[0]
  if (n === 2) return Math.max(nums[0], nums[1])
  const dp: number[] = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[n - 1]
}
