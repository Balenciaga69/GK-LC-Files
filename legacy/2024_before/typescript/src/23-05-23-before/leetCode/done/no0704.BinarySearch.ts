namespace lc0704 {
  function search(nums: number[], target: number): number {
    if (nums.length === 0) return -1;
    if (nums.length === 1 && nums[0] === target) return 0;
    let ans = -1;
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      const m = ((l + r) / 2) | 0;
      if (nums[m] === target) return m;
      if (nums[m] > target) r = m - 1;
      if (nums[m] < target) l = m + 1;
    }
    return ans;
  }
  const nums = [2, 5],
    target = 9;
  console.log(`正在測試...`, search(nums, target));
}
