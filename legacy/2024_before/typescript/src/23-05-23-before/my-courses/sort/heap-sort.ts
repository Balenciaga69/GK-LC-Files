namespace HeapSort {
  const dataArray = [15, 3, 17, 18, 20, 2, 1, 666];
  const result = heapSort(dataArray);
  console.log(`正在測試...`, result);
  // * * * * *  * * * * *
  function heapSort(ary: number[]) {
    let size = ary.length - 1;
    for (let i = (size / 2) | 0; i > -1; i--) {
      triSwap(i);
    }
    for (let i = ary.length - 1; i > -1; i--) {
      swap(0, i);
      size = size - 1;
      triSwap(0);
    }
    return ary;
    // * * * * *  * * * * *
    function triSwap(top: number) {
      const left = top * 2 + 1;
      const right = top * 2 + 2;
      const compareAry: number[] = [];
      if (left <= size) compareAry.push(left);
      if (right <= size) compareAry.push(right);
      let max = top;
      compareAry.forEach((idx) => {
        if (ary[idx] > ary[max]) max = idx;
      });
      if (max !== top) {
        swap(top, max);
        triSwap(max);
      }
    }
    // * * * * *  * * * * *
    function swap(x: number, y: number) {
      const temp = ary[x];
      ary[x] = ary[y];
      ary[y] = temp;
    }
  }
}
