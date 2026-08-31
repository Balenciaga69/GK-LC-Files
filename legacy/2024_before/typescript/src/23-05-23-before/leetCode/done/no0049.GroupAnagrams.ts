namespace lc0049 {
  function groupAnagrams(ary: string[]): string[][] {
    function sort(str: string) {
      return str
        .split("")
        .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
        .join("");
    }
    // * * * * *  * * * * *
    const myMap = new Map<string, string[]>();
    if (ary.length === 1) return [ary];
    ary.forEach((e) => {
      const sorted = sort(e);
      if (myMap.has(sorted)) {
        const prev = myMap.get(sorted)!;
        myMap.set(sorted, [...prev, e]);
      } else {
        myMap.set(sorted, [e]);
      }
    });
    // * * * * *  * * * * *
    const result: string[][] = [];
    myMap.forEach((val) => {
      result.push(val);
    });
    return result;
  }
  const ipt = ["eat", "tea", "tan", "ate", "nat", "bat"];
  //   groupAnagrams(ipt);
}
