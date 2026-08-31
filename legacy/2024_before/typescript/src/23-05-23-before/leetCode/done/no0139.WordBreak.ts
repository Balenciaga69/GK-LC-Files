namespace lc0139 {
  function wordBreak(s: string, wordDict: string[]): boolean {
    const dict = new Set(wordDict);
    const isExist = new Array(s.length + 1).fill(false);
    isExist[0] = true;
    for (let i = 1; i <= s.length; i++) {
      // i 之前 的 子字串
      for (let j = 0; j < i; j++) {
        const isDictHasWord = dict.has(s.substring(j, i));
        // isExist [5] 代表 5 之前 已經驗證過 涵蓋在字典範圍組合內
        if (isExist[j] && isDictHasWord) {
          isExist[i] = true;
          break;
        }
      }
    }
    return isExist[s.length];
  }
  let s = "applepenapplepen",
    wordDict = ["apple", "pen", "a"];
  wordBreak(s, wordDict);
}
