namespace lc0128 {
  function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;
    let count = 1;
    let hashSet = new Set(nums);
    nums.forEach((e) => {
      if (!hashSet.has(e - 1)) {
        let currCount = 1;
        while (hashSet.has(e + currCount)) {
          currCount++;
        }
        count = Math.max(currCount, count);
      }
    });
    return count;
  }
  let nums = [100, 4, 200, 1, 3, 2];
  longestConsecutive(nums);
}
