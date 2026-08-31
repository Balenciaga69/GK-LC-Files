namespace lc0064 {
 const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
 ];
 minPathSum(grid);
 // * * * * *  * * * * *
 function minPathSum(grid: number[][]): number {
  let m = grid.length;
  let n = grid[0].length;
  const dp: number[][] = new Array(m).fill(0).map(_ => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
   for (let j = 0; j < n; j++) {
    const tmp: number[] = [];
    if (i > 0) tmp.push(dp[i - 1][j]);
    if (j > 0) tmp.push(dp[i][j - 1]);
    dp[i][j] = min(tmp) + grid[i][j];
   }
  }
  return dp[m - 1][n - 1];
  function min(ary: number[]) {
   if (ary.length == 0) return 0;
   let m = ary[0];
   ary.forEach(val => (m = Math.min(val, m)));
   return m;
  }
  // * * * * *  * * * * *
 }
}
