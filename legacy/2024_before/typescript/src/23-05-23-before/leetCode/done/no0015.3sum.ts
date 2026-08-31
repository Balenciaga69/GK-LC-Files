namespace lc0015 {
  const input = [-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4];
  function threeSum(nums: number[]): number[][] {
    const ansArray: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let a1 = 0; a1 < nums.length; a1++) {
      // (防答案重複)與上個num[a1] 不同
      if (a1 > 0 && nums[a1] === nums[a1 - 1]) continue;
      let a3 = nums.length - 1;
      for (let a2 = a1 + 1; a2 < nums.length; a2++) {
        const getA123Sum = () => nums[a1] + nums[a2] + nums[a3];
        // (防答案重複)與上個num[a2] 不同
        if (a2 > a1 + 1 && nums[a2] === nums[a2 - 1]) continue;
        // 縮小範圍
        while (a2 < a3 && getA123Sum() > 0) a3--;
        // 是否在合理範圍
        if (a2 >= a3) break;
        // 是否與答案要求相符
        if (getA123Sum() === 0) ansArray.push([nums[a1], nums[a2], nums[a3]]);
      }
    }
    return ansArray;
  }
  console.log(`正在測試...`, threeSum(input));
}
