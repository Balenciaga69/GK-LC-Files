namespace lc0424 {
  const s = "ABAABCA",
    k = 2;
  function characterReplacement(s: string, k: number): number {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    let ans = 0;
    let maxCombo = 0;
    let start = 0;
    let record = new Array(26).fill(0);
    for (let end = 0; end < s.length; end++) {
      let codeStart = s[start].charCodeAt(0) - 65;
      let codeEnd = s[end].charCodeAt(0) - 65;
      record[codeEnd]++;
      // 子字串中(最常見字母)的(出現次數)
      maxCombo = Math.max(maxCombo, record[codeEnd]);
      // * * * * *  * * * * *
      //當sub String 已經不符合題目限制容忍範圍
      if (end - start + 1 > maxCombo + k) {
        // 內縮 sub String 同時修改 record存放狀態
        record[codeStart]--;
        start++;
      }
      ans = Math.max(ans, end - start + 1);
    }
    return ans;
  }
  characterReplacement(s, k);
}
