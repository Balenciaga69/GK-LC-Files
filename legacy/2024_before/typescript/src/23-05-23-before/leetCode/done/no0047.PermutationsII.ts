namespace lc0047 {
  function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    func([], new Set());
    /**
     *
     * @param curr 往深處傳遞 目前排列
     * @param idxUse 該排列內容取自哪些index
     */
    function func(curr: number[], idxUse: Set<number>) {
      if (curr.length === nums.length) {
        result.push([...curr]);
        return;
      }
      // * * * * *  * * * * *
      for (let i = 0; i < nums.length; i++) {
        if (idxUse.has(i)) continue;
        const isSameVal = i > 0 && nums[i] === nums[i - 1];
        // 與前一個val相等，且排列未使用前一個數字實體
        // 112 -> 112 跳過
        // 112 -> 121 執行
        if (isSameVal && !idxUse.has(i - 1)) continue;
        idxUse.add(i);
        func([...curr, nums[i]], idxUse);
        idxUse.delete(i);
      }
    }
    return result;
  }
  permuteUnique([1, 2, 12]);
}
