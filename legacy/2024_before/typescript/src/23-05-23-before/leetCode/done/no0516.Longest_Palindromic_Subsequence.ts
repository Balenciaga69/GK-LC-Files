namespace lc0516 {
  function longestPalindromeSubseq(s: string): number {
    let v = s.split("").reverse().join("");
    const dp = new Array(s.length + 1)
      .fill(0)
      .map((_) => new Array(s.length + 1).fill(0));
    // * * * * *  * * * * *
    for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= s.length; j++) {
        if (s[i - 1] === v[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    // * * * * *  * * * * *
    return dp[s.length][s.length];
  }
  longestPalindromeSubseq("bbbab");
}
