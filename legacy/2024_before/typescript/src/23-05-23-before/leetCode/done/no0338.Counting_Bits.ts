namespace lc0338 {
  function countBits(n: number): number[] {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    const dp: number[] = [0, 1];
    for (let i = 2; i <= n; i++) {
      dp.push(dp[i - getMax2(i)] + 1);
    }
    return dp;
  }
  const twoList = [
    1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768,
    65536,
  ].reverse();
  function getMax2(n: number) {
    // ex: 7 = 4 + 3
    // ex: 47 = 32 + 15
    return twoList.find((e) => n / e >= 1)!;
  }
  countBits(8);
}
