namespace lc0191 {
  function hammingWeight(n: number): number {
    let cnt = 0;
    while (n != 0) {
      cnt += n & 1;
      n = n >> 1;
    }
    return cnt;
  }
  hammingWeight(4294967293);
}
