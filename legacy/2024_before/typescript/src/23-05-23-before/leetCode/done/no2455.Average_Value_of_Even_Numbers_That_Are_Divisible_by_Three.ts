namespace lc02455 {
  function averageValue(nums: number[]): number {
    const a: number[] = [];
    nums.forEach((val) => val % 3 === 0 && val % 2 === 0 && a.push(val));
    if (a.length) {
      const total = a.reduce((p, c) => p + c);
      return Math.floor(total / a.length);
    }
    return 0;
  }
}
