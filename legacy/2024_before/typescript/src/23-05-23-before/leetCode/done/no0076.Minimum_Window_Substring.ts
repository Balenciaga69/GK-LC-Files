// 窗口不包含子序列 r++
// 窗口包含 l++
namespace lc0076 {
  function minWindow(s: string, t: string): string {
    let miniString: string = "";
    const sMap = new Map<string, number>();
    const tMap = new Map<string, number>();
    let l = 0;
    let r = 0;
    // * * * * *  * * * * *
    sMap.set(s[0], 1);
    initTMap();
    // * * * * *  * * * * *
    while (r < s.length && l < s.length && l <= r) {
      if (checkMap()) {
        sMap.set(s[l], sMap.get(s[l])! - 1);
        l++;
      } else {
        r++;
        let count = sMap.get(s[r]) || null;
        sMap.set(s[r], count !== null ? count + 1 : 1);
      }
    }
    // * * * * * 1143. Longest Common Subsequence * * * * *
    function checkMap() {
      let bool = true;
      tMap.forEach((val, key) => {
        if (!bool) return;
        bool = Boolean(sMap.get(key)) && sMap.get(key)! >= val;
      });
      if (!bool) return false;
      setMinStr();
      return true;
    }
    function setMinStr() {
      let subStr = s.substring(l, r + 1);
      if (miniString === "") miniString = subStr;
      else if (miniString.length > subStr.length) miniString = subStr;
    }
    function initTMap() {
      for (const c of t) {
        let count = tMap.get(c);
        tMap.set(c, count ? count + 1 : 1);
      }
    }
    return miniString;
  }
  let s = "a",
    t = "aa";
  minWindow(s, t);
}
