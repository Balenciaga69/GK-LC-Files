namespace lc0153 {
  function findMin(nums: number[]): number {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      let m = Math.floor((r + l) / 2);
      if (nums[m] > nums[r]) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    return nums[l];
  }
  const ipt = [4, 5, 6, 7, 0, 1, 2];
  console.log(`正在測試...`, findMin(ipt));
}
