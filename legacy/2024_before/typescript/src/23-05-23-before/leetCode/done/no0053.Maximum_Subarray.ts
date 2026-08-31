namespace lc0053 {
  function maxSubArray(nums: number[]): number {
    const dp: number[] = [nums[0]];
    let maxVal = dp[0];
    for (let i = 1; i < nums.length; i++) {
      if (dp[i - 1] > 0) {
        dp[i] = dp[i - 1] + nums[i];
      } else {
        dp[i] = nums[i];
      }
      maxVal = Math.max(dp[i], maxVal);
    }
    return maxVal;
  }
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  maxSubArray(nums);
}
