namespace lc0238 {
  function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const left = [nums[0]];
    const right = [nums[n - 1]];
    const result: number[] = [];
    for (let i = 1; i < n - 1; i++) {
      left.push(left[i - 1] * nums[i]);
      right.push(right[i - 1] * nums[n - i - 1]);
    }
    left.unshift(1);
    right.reverse();
    right.push(1);
    // * * * * *  * * * * *
    for (let i = 0; i < n; i++) {
      result.push(left[i] * right[i]);
    }
    return result;
  }
  productExceptSelf([2, 3, 7, 11]);
}
