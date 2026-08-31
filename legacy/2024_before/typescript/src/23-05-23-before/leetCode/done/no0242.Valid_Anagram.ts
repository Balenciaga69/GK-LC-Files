namespace lc0242 {
  function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const mapS = new Map<string, number>();
    const mapT = new Map<string, number>();
    let isPass = true;
    for (let c of s) {
      const tmp = mapS.get(c);
      mapS.set(c, tmp !== undefined ? tmp + 1 : 1);
    }
    for (let c of t) {
      const tmp = mapT.get(c);
      mapT.set(c, tmp !== undefined ? tmp + 1 : 1);
    }
    mapS.forEach((times, key) => {
      if (!isPass) return;
      if (!(mapT.get(key) && mapT.get(key) === times)) isPass = false;
    });
    return isPass;
  }
  isAnagram("aacc", "ccac");
}
