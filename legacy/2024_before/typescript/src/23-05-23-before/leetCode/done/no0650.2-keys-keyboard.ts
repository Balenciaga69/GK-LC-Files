namespace lc0650 {
 function minSteps(n: number): number {
  const dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; ++i) {
   dp[i] = Infinity;
   for (let j = 1; j * j <= i; ++j) {
    if (i % j === 0) {
     dp[i] = Math.min(dp[i], Math.floor(dp[j] + i / j));
     dp[i] = Math.min(dp[i], Math.floor(dp[i / j] + j));
    }
   }
  }
  return dp[n];
 }
 minSteps(10);
}
