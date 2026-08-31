namespace lc2465 {
  function distinctAverages(nums: number[]): number {
    const hash = new Map<number, number>();
    while (nums.length) run();
    function run() {
      let max = 0;
      let min = 0;
      for (let i = 0; i < nums.length; i++) {
        if (nums[max] <= nums[i]) max = i;
        if (nums[min] >= nums[i]) min = i;
      }
      let key = (nums[max] + nums[min]) / 2;
      let times = hash.get(key) || 0;
      hash.set(key, times + 1);
      nums = nums.filter((_, i) => i !== max && i !== min);
    }
    return hash.size;
  }
  const nums = [4, 1, 4, 0, 3, 5];
  distinctAverages(nums);
}
