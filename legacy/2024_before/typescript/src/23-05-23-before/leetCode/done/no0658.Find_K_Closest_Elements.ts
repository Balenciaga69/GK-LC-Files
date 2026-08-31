namespace lc658 {
  function findClosestElements(arr: number[], k: number, x: number): number[] {
    const len = arr.length;
    const m = binary();
    const ans: number[] = [];
    let l = m - 1 > 0 ? m - 1 : 0;
    let r = m == 0 ? 1 : m;
    while (ans.length < k) {
      if (!isLegal(l)) {
        ans.push(arr[r++]);
        continue;
      }
      if (!isLegal(r)) {
        ans.push(arr[l--]);
        continue;
      }
      const con = Math.abs(arr[l] - x) < Math.abs(arr[r] - x);
      const con2 = Math.abs(arr[l] - x) === Math.abs(arr[r] - x) && l < r;
      if (con || con2) ans.push(arr[l--]);
      else ans.push(arr[r++]);
    }
    return ans.sort((a, b) => a - b);
    function isLegal(i: number) {
      return i >= 0 && i <= len - 1;
    }
    // * * * * *  * * * * *
    function binary() {
      let l = 0;
      let r = len - 1;
      let idx = -1;
      while (l <= r) {
        const m = Math.floor((l + r) / 2);
        idx = m;
        if (arr[m] === x) break;
        if (arr[m] > x) r = m - 1;
        else l = m + 1;
      }
      return idx;
    }
  }
  let arr1 = [1, 3],
    k1 = 1,
    x1 = 2;
  let arr2 = [1, 5, 10],
    k2 = 1,
    x2 = 4;
  let arr3 = [1, 2, 3, 4, 5],
    k3 = 4,
    x3 = 3;

  findClosestElements(arr2, k2, x2);
}
/*
1. binary search 找到 與 x 接近的 mid point
2. 從 mid 擴散邊界 直到 答案len === k
*/
