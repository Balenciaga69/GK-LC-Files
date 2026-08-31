namespace lc0566 {
  // easy
  function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    if (mat.length <= 0) return mat;
    const m = mat.length;
    const n = mat[0].length;
    if (m * n != r * c) return mat;
    const tempAry = [];
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        tempAry.push(mat[i][j]);
      }
    }
    const result: number[][] = [];
    for (let i = 0; i < tempAry.length; i++) {
      let x = (i / c) | 0;
      let y = i % c;
      if (!result[x]) result[x] = [];
      result[x][y] = tempAry[i];
    }
    return result;
  }
  let mat = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ];
  let r = 2;
  let c = 4;
  const result = matrixReshape(mat, r, c);
  console.log(`正在測試...`, result);
}
