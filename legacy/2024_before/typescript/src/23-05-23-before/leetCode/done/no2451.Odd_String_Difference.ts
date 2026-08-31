namespace lc2451 {
  function oddString(words: string[]): string {
    const m = new Map<string, string[]>();
    let ans = "";
    words.forEach((w) => {
      const key = calc(w);
      const ref = m.get(key);
      m.set(key, ref ? [...ref, w] : [w]);
    });
    m.forEach((ary) => {
      if (ary.length === 1) ans = ary[0];
    });
    return ans;
    function calc(w: string) {
      let res = "";
      for (let i = 1; i < w.length; i++) {
        res += "#" + (w[i].charCodeAt(0) - w[i - 1].charCodeAt(0));
      }
      return res;
    }
  }
  const words = ["adc", "wzy", "abc"];
  oddString(words);
}
