namespace lc0567 {
  function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length === 0) return false;
    if (s1.length > s2.length) return false;
    const map1 = new Map<string, number>();
    const map2 = new Map<string, number>();
    // * * * * *  * * * * *
    s1.split("").forEach((e) => addMap(e, map1));
    s2.substring(0, 0 + s1.length)
      .split("")
      .forEach((e) => addMap(e, map2));
    if (isPassFunc()) return true;
    // * * * * *  * * * * *
    for (let i = s1.length; i < s2.length; i++) {
      // * * * * *  * * * * *
      reduceMap(s2.substring(i - s1.length, i - s1.length + 1), map2);
      addMap(s2.substring(i, i + 1), map2);
      if (isPassFunc()) return true;
    }
    return false;
    // * * * * *  * * * * *
    function isPassFunc() {
      let isPass = true;
      map2.forEach((m2Val, key) => {
        if (map1.get(key) !== m2Val) {
          isPass = false;
        }
      });
      return isPass;
    }
  }

  function addMap(key: string, map: Map<string, number>) {
    if (map.has(key)) {
      const val = map.get(key)! + 1;
      map.set(key, val);
    } else {
      map.set(key, 1);
    }
  }
  function reduceMap(key: string, map: Map<string, number>) {
    if (map.get(key) === 1) {
      map.delete(key);
    } else {
      const val = map.get(key)! - 1;
      map.set(key, val);
    }
  }
  const s1 = "ab",
    s2 = "eidboaoo";
  checkInclusion(s1, s2);
}
