namespace lc0045 {
  function 逆jump(nums: number[]): number {
    let curr = nums.length - 1;
    let count = 0;
    while (curr > 0) {
      for (let i = 0; i < curr; i++) {
        if (nums[i] + i >= curr) {
          curr = i;
          count++;
          break;
        }
      }
    }
    return count;
  }
  function 正jump(nums: number[]) {
    let end = 0;
    let max = 0;
    let step = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      max = Math.max(max, i + nums[i]);
      if (i === end) {
        end = max;
        step++;
      }
    }
    return step;
  }
  const nums = [2, 3, 1, 1, 4];
}
