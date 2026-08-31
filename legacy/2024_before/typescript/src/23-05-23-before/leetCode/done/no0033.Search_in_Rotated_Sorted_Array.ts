namespace lc0033 {
  function search(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      let m = ((l + r) / 2) | 0;
      if (nums[m] === target) return m;
      if (nums[r] > nums[m]) {
        if (nums[m] < target && nums[r] >= target) l = m + 1;
        else r = m - 1;
      } else {
        if (nums[m] > target && nums[l] <= target) r = m - 1;
        else l = m + 1;
      }
    }
    return -1;
  }
  const nums = [4, 5, 6, 7, 0, 1, 2],
    target = 3;
  search(nums, target);
}
