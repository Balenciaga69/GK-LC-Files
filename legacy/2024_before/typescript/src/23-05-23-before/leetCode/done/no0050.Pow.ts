namespace lc0050 {
  function selfPow(x: number, n: number): number {
    if (n === 0) return 1;
    if (x === 1) return 1;
    if (x === 0) return 0;
    if (x === -1) return n % 2 === 0 ? 1 : -1;
    const halfP = selfPow(x, Math.floor(n / 2));
    return halfP * halfP * (n % 2 === 0 ? 1 : x);
  }
  function myPow(x: number, n: number): number {
    let base = x;
    let pow = Math.abs(n);
    if (n < 0) base = 1 / x;
    return selfPow(base, pow);
  }
  myPow(3, 6);
}
