namespace lc0046 {
  function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    func([]);
    function func(curr: number[]) {
      if (curr.length === nums.length) {
        result.push([...curr]);
        return;
      }
      for (let i = 0; i < nums.length; i++) {
        if (curr.find((e) => e === nums[i]) !== undefined) continue;
        func([...curr, nums[i]]);
      }
    }
    return result;
  }
  permute([0, 1]);
}
