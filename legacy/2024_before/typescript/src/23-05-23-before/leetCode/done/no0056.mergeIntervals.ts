namespace lc0056 {
  function merge(intervals: number[][]): number[][] {
    const ansAry: number[][] = [];
    intervals.sort((a, b) => a[0] - b[0]);
    intervals.forEach((elem) => {
      // if ansAry empty
      if (ansAry.length === 0) {
        ansAry.push(elem);
      }
      // if ansAry not empty
      else {
        let lastAry = ansAry[ansAry.length - 1];
        // if elem in lastAry range
        if (elem[0] <= lastAry[1]) {
          lastAry[1] = Math.max(lastAry[1], elem[1]);
        }
        // if elem out lastAry range
        else {
          ansAry.push(elem);
        }
      }
    });
    return ansAry;
  }
  const input = [
    [1, 3],
    [1, 2],
    [2, 3],
    [3, 5],
    [8, 10],
    [7, 14],
    [15, 18],
  ];

  console.log(`正在測試...`, merge(input));
}
