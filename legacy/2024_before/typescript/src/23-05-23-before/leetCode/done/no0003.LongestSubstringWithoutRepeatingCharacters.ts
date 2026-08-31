namespace lc0003 {
  function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    let maxCount = 0;
    let curr = 0; // 走訪點
    let last = 0; //重複點 +1的位置
    const mySet = new Set<string>();
    while (curr < s.length) {
      if (mySet.has(s[curr])) {
        last = forFindIdx(last, curr, s[curr]) + 1;
        curr = last;
        mySet.clear();
      } else {
        mySet.add(s[curr]);
        maxCount = Math.max(maxCount, mySet.size);
        curr++;
      }
    }
    return maxCount;
    // * * * * *  * * * * *
    function forFindIdx(start: number, end: number, target: string) {
      for (let i = start; i <= end; i++) {
        if (s[i] === target) return i;
      }
      return -1;
    }
    // * * * * *  * * * * *
  }
  lengthOfLongestSubstring("abcacbb");
}
