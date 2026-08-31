namespace lc2460 {
  function applyOperations(nums: number[]): number[] {
    let a: number[] = [];
    let z: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
        nums[i] += nums[i];
        nums[i + 1] = 0;
      }
      if (nums[i]) a.push(nums[i]);
      else z.push(nums[i]);
    }
    return [...a, ...z];
  }
}
