namespace QuickSort {
  let count = 0;
  function quickSort(array: number[]) {
    sort(0, array.length - 1);
    function sort(l: number, r: number) {
      if (l >= r) return;
      let i = l - 1;
      for (let j = l; j < r; j++) {
        if (array[j] <= array[r]) {
          i++;
          [array[i], array[j]] = [array[i], array[j]];
        }
      }
      i++; //推進一格作為基準放置點
      [array[i], array[r]] = [array[r], array[i]];
      sort(l, i - 1);
      sort(i + 1, r);
    }
    return array;
  }

  const input = [3, 2, 1, 5, 6, 4];
  const output = quickSort(input);
  console.log(`正在測試...`, output);
}
