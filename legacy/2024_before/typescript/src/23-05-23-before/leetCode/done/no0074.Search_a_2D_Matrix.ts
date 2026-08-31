namespace lc0074 {
  function searchMatrix(matrix: number[][], target: number): boolean {
    // 找矩陣的first
    let ary_l = 0;
    let ary_r = matrix.length - 1;
    while (ary_l <= ary_r) {
      let ary_m = ary_l + Math.floor((ary_r - ary_l) / 2);
      const tAry = matrix[ary_m];
      const firstElement = tAry[0];
      const lastElement = tAry[tAry.length - 1];
      if (target < firstElement) {
        ary_r = ary_m - 1;
        continue;
      }
      if (target > lastElement) {
        ary_l = ary_m + 1;
        continue;
      }
      if (target >= firstElement && target <= lastElement) {
        let l = 0;
        let r = tAry.length - 1;
        while (l <= r) {
          let m = l + Math.floor((r - l) / 2);
          if (target === tAry[m]) return true;
          if (target < tAry[m]) {
            r = m - 1;
          }
          if (target > tAry[m]) {
            l = m + 1;
          }
        }
        return false;
      }
    }
    //
    return false;
  }
  const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    target = 32;
  searchMatrix(matrix, target);
}
