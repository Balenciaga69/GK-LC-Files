namespace BubbleSort {
  function swap(arr: number[], x: number, y: number) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
  function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }
  const input = [1, 0, 5, 2, 7, 1, 3];
  const output = bubbleSort(input);
}
