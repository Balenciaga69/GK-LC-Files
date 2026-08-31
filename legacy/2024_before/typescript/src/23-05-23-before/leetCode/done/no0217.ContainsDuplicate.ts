namespace lc0217 {
  function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
  }
  const nums = [1, 2, 3, 1];
  containsDuplicate(nums);
}
