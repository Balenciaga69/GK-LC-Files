namespace wil153 {
  const ary = [1, 1];
  function fib(n: number) {
    for (let i = 2; i <= n; i++) ary.push(ary[i - 1] + ary[i - 2]);
    return ary[ary.length - 1];
  }
}
