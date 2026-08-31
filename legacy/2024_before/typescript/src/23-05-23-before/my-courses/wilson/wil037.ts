namespace wil037 {
  const array: any[] = [
    [[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]],
  ];
  const resultAry: number[] = [];
  function flat(ary: any[]) {
    ary.forEach((e) => {
      // is Array
      if (Array.isArray(e)) {
        flat(e);
      }
      // is number
      else {
        resultAry.push(e);
      }
    });
  }
  flat(array);
  console.log(`正在測試...`, resultAry);
}
