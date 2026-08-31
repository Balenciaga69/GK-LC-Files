namespace lc0011 {
  const ipt = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  function maxArea(height: number[]): number {
    let maxVal = -Infinity;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
      const currHeight = Math.min(height[l], height[r]);
      maxVal = Math.max(maxVal, currHeight * (r - l));
      if (currHeight === height[l]) {
        l++;
      } else {
        r--;
      }
    }
    return maxVal;
  }
  maxArea(ipt);
}
