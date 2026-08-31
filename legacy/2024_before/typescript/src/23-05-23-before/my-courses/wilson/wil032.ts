namespace wil032 {
  function getMinSubArray(ary: number[], targetVal: number) {
    let i = 0;
    let j = 0;
    let ans: [number, number] = [-999, 999];
    while (i < ary.length) {
      let sum = ary.slice(i, j + 1).reduce((prev, curr) => prev + curr);
      //   總和 超過 目標值
      if (sum >= targetVal) {
        if (j - i <= ans[1] - ans[0]) ans = [i, j];
        i++;
      }
      //   總和低於 目標值
      else {
        // 右邊尚未到底
        if (j < ary.length - 1) {
          j++;
        }
        // 右邊到底
        else {
          break;
        }
      }
    }
    console.log(`正在測試...`, ans);
  }

  const array = [8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12];
  getMinSubArray(array, 60);
}
