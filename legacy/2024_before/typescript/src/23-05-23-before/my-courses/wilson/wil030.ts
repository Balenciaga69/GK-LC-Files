namespace wil030 {
  function min_max_sum(ary: number[], size: number) {
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    let sum = ary.slice(0, size).reduce((prev, curr) => prev + curr);
    for (let i = size; i <= ary.length - 1; i++) {
      sum = sum - ary[i - size] + ary[i];
      max = Math.max(max, sum);
      min = Math.min(min, sum);
    }
    console.log(`max...`, max);
    console.log(`min...`, min);
  }
  const ary = [2, 7, 3, 0, 6, 1, -5, -12, -11];
  min_max_sum(ary, 3);
}
