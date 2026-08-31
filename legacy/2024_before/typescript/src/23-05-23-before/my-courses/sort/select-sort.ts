namespace SelectSort {
  function swap(arr: number[], x: number, y: number) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
  function selectSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      let min = Infinity;
      let minIdx = -999;
      //   forEach 最小的數值
      for (let j = i; j < arr.length; j++) {
        if (arr[j] <= min) {
          min = arr[j];
          minIdx = j;
        }
      }
      swap(arr, i, minIdx);
    }
    return arr;
  }
  const input = [4, 1, 2, 5, 3, 7];
  const output = selectSort(input);
  console.log(`正在測試...`, output);
}
