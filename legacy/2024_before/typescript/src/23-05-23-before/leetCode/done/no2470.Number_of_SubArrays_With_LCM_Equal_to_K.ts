namespace lc2470 {
  const ipt = [2, 1, 1, 5];
  subarrayLCM(ipt, 5);
  function subarrayLCM(n: number[], k: number): number {
    let end = n.length - 1;
    let count = 0;
    for (let i = 0; i <= end; i++) {
      if (!isLegalNum(n[i], k)) continue;
      let temp = n[i];
      for (let j = i; j <= end; j++) {
        if (!isLegalNum(n[j], k)) break;
        temp = LCM(temp, n[j]);
        if (LCM(temp, k) > k) break;
        if (temp === k) count++;
      }
    }
    return count;
  }
  function isLegalNum(num: number, k: number) {
    if (num > Math.floor(k / 2) && num !== k) return false;
    return true;
  }
  function GCD(a: number, b: number): number {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    if (max % min === 0) return min;
    else return GCD(max % min, min);
  }
  function LCM(a: number, b: number) {
    return (a * b) / GCD(a, b);
  }
}
