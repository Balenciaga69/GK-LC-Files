namespace lc0647Simple {
  function countSubstrings(s: string): number {
    const resAry: string[] = [];
    for (let i = 0; i < s.length; i++) {
      run(i, i);
      run(i, i + 1);
    }
    return resAry.length;
    function run(l: number, r: number) {
      // * * * * *  * * * * *
      while (isInRange() && s[l] === s[r]) {
        resAry.push(s.substring(l, r + 1));
        l--;
        r++;
      }
      // * * * * *  * * * * *
      function isInRange() {
        if (l > r) return false;
        if (l < 0) return false;
        if (r > s.length - 1) return false;
        return true;
      }
    }
  }
  countSubstrings("aabb");
}
namespace lc0647DP {
  function countSubstrings(s: string): number {
    const n = s.length;
    let cnt = 0;
    const dp: boolean[][] = new Array(n + 1)
      .fill(0)
      .map((_) => new Array(n + 1).fill(false));
    // * * * * *  * * * * *
    // for each length
    for (let len = 1; len <= n; len++) {
      // for each start index
      for (let l = 0; l <= n - len; l++) {
        // end index
        const r = l + len - 1;
        if (s[l] !== s[r]) continue;
        let isP = false;
        if (r - l === 0) isP = true; // 1,1 a
        if (r - l === 1) isP = true; // 1,2 aa
        if (dp[l + 1][r - 1]) isP = true; // b'aa'b 內側是回文 兩側外擴
        if (!isP) continue;
        dp[l][r] = true;
        cnt++;
      }
    }
    return cnt;
  }
  countSubstrings("aaa");
}

// aabb
