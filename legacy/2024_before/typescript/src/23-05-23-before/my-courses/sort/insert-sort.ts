namespace SelectSort {
  function swap(arr: number[], x: number, y: number) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
  function insertSort(arr: number[]) {
    // 1~n
    for (let i = 1; i < arr.length; i++) {
      // 與 sorted numbers 比較
      for (let j = i; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
          swap(arr, j, j - 1);
        }
      }
    }
    return arr;
  }
  const input = [4, 1, 2, 5, 3, 7];
  const output = insertSort(input);
  console.log(`正在測試...`, output);
}
