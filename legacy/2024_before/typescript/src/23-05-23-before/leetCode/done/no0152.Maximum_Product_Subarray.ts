namespace lc0152 {
  function maxProduct(nums: number[]): number {
    let prevMin = nums[0];
    let prevMax = nums[0];
    let realMaxState = prevMax;
    for (let i = 1; i < nums.length; i++) {
      let currMax = whoIsMax([prevMax * nums[i], prevMin * nums[i], nums[i]]);
      let currMin = whoIsMin([prevMax * nums[i], prevMin * nums[i], nums[i]]);
      prevMax = currMax;
      prevMin = currMin;
      realMaxState = whoIsMax([realMaxState, prevMax]);
    }
    return realMaxState;
  }
  function whoIsMax(ary: number[]) {
    let max = ary[0];
    ary.forEach((e) => (max = e > max ? e : max));
    return max;
  }
  function whoIsMin(ary: number[]) {
    let min = ary[0];
    ary.forEach((e) => (min = e < min ? e : min));
    return min;
  }
  const ipt = [2, 3, -2, 4];
  maxProduct(ipt);
}
