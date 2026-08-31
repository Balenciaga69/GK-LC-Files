namespace lc0832 {
  // easy
  function flipAndInvertImage(image: number[][]): number[][] {
    function swap(arr: number[], x: number, y: number) {
      const temp = arr[y];
      arr[y] = arr[x];
      arr[x] = temp;
    }
    const n = image.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (j < ((n / 2) | 0)) swap(image[i], j, n - j - 1);
        image[i][j] = image[i][j] ? 0 : 1;
      }
    }
    return image;
  }
  const image = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ];
  flipAndInvertImage(image);
}
