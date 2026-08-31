namespace lc0509 {
 function fib(n: number): number {
  if (n === 0) return 0;
  const dp: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
   dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp.pop()!;
 }
}
