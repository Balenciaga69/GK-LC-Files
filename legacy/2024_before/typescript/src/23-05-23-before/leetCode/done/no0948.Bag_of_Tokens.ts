namespace lc0948 {
  function bagOfTokensScore(tokens: number[], power: number): number {
    let ans = 0;
    let point = 0;
    tokens.sort((a, b) => a - b);
    let low = 0; // 小費用卡，刷點數用
    let high = tokens.length - 1; // 大費用卡，換能量用
    /**
     * 可行動條件:
     * 1.還能繼續操縱token
     * 2.還有能量殘留 or
     * 3.還有點數能換取能量
     */
    while (low <= high && (power >= tokens[low] || point > 0)) {
      /**
       * 行動策略:
       * 瘋狂用能量換點數
       * 沒能量的時候用點數換取能量
       * 繼續瘋狂換點數
       */
      // 能量 換點數
      while (low <= high && power >= tokens[low]) {
        power -= tokens[low++];
        point++;
      }
      ans = Math.max(ans, point);
      if (low <= high && point > 0) {
        power += tokens[high--];
        point--;
      }
    }
    return ans;
  }
}
