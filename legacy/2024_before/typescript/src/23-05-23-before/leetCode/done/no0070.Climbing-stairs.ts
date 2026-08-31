namespace lc0070 {
  //easy
  // f(x)=f(x−1)+f(x−2)
  function climbStairs(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let last2 = 1;
    let last1 = 2;
    for (let i = 3; i <= n; i++) {
      const temp = last1;
      last1 = last1 + last2;
      last2 = temp;
    }
    return last1;
  }
  /**
   * s1 1 = 1
   * s2 2 = 11 2
   * s3 3 = 12 21 111
   * s4 5 = 211 121 112 1111 22
   */
}
