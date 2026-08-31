namespace lc0412 {
  // easy
  function fizzBuzz(n: number): string[] {
    const result: string[] = [];
    for (let i = 1; i <= n; i++) result[i - 1] = `${i}`;
    for (let i = 3; i <= n; i += 3) result[i - 1] = "Fizz";
    for (let i = 5; i <= n; i += 5) result[i - 1] = "Buzz";
    for (let i = 15; i <= n; i += 15) result[i - 1] = "FizzBuzz";
    return result;
  }
  console.log(`正在測試...`, fizzBuzz(30));
}
