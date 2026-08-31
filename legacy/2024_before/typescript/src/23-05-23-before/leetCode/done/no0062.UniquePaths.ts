namespace lc0062 {
 uniquePaths(3, 7);
 function uniquePaths(m: number, n: number): number {
  const dp: number[][] = new Array(m).fill(0).map(_ => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
   for (let j = 0; j < n; j++) {
    let tmp = 0;
    if (i > 0) tmp += dp[i - 1][j];
    if (j > 0) tmp += dp[i][j - 1];
    if (i == 0 && j == 0) tmp = 1;
    dp[i][j] = tmp;
   }
  }
  return dp[m - 1][n - 1];
 }
}
