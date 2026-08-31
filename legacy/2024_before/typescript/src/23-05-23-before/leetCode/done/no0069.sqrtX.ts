namespace lc0069 {
  function mySqrt(x: number): number {
    let result = 0;
    let l = 0;
    let r = x;
    while (l <= r) {
      const m = ((l + r) / 2) | 0;
      if (m * m <= x) {
        result = m;
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    return result;
  }
  mySqrt(8);
}
