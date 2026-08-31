namespace wil036 {
  function fib(n: number = 0): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
  }
  console.log(`正在測試...`, fib(2));
  console.log(`正在測試...`, fib(3));
  console.log(`正在測試...`, fib(4));
  console.log(`正在測試...`, fib(5));
  console.log(`正在測試...`, fib(6));
}
