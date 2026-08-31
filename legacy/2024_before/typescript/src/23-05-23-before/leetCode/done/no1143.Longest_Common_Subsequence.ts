namespace lc1143 {
  function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;
    const record = new Array(m + 1)
      .fill(0)
      .map((_) => new Array(n + 1).fill(0));
    for (let i = 1; i < m + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        if (text1[i - 1] === text2[j - 1]) {
          record[i][j] = 1 + record[i - 1][j - 1];
        } else {
          let left = record[i][j - 1];
          let top = record[i - 1][j];
          record[i][j] = Math.max(left, top);
        }
      }
    }
    return record[m][n];
  }
}
