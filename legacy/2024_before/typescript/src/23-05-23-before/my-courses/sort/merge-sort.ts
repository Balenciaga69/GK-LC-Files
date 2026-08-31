namespace MergeSort {
  function divide(array: number[]): number[] {
    const length = array.length;
    if (length === 1) return array;
    const m = (length / 2) | 0;
    const l = array.slice(0, m);
    const r = array.slice(m);
    let result = merge(divide(l), divide(r));
    return result;
  }
  function merge(lAry: number[], rAry: number[]) {
    const result: number[] = [];
    let lIdx = 0;
    let rIdx = 0;
    while (lIdx < lAry.length && rIdx < rAry.length) {
      const L = lAry[lIdx];
      const R = rAry[rIdx];
      if (L < R) {
        result.push(L);
        lIdx++;
      } else {
        result.push(R);
        rIdx++;
      }
    }
    return [...result, ...lAry.slice(lIdx), ...rAry.splice(rIdx)];
  }
  const input = [4, 2, 3, 6, 8];
  const output = divide(input);
}
// namespace newMergeSort {
//   const input = [5, 4, 3, 2, 1];
//   const output = div(input);
//   console.log(`正在測試...`, output);
//   function div(arr: number[]): number[] {
//     if (arr.length === 1) return arr;
//     let mid = (arr.length / 2) | 0;
//     let lAry = arr.slice(0, mid);
//     let rAry = arr.slice(mid);
//     return merge(div(lAry), div(rAry));
//   }
//   function merge(lAry: number[], rAry: number[]) {
//     let lIdx = 0;
//     let rIdx = 0;
//     let resultARy: number[] = [];
//     // * * * * *  * * * * *
//     while (lIdx < lAry.length && rIdx < rAry.length) {
//       // 小的先放進去
//       if (lAry[lIdx] < rAry[rIdx]) {
//         resultARy.push(lAry[lIdx]);
//         lIdx++;
//       } else {
//         resultARy.push(rAry[rIdx]);
//         rIdx++;
//       }
//     }
//     // * * * * *  * * * * *
//     let remainAry: number[] = [];
//     if (lIdx !== lAry.length) {
//       remainAry = lAry.slice(lIdx);
//     } else {
//       remainAry = rAry.slice(rIdx);
//     }
//     // * * * * *  * * * * *
//     return [...resultARy, ...remainAry];
//   }
// }
