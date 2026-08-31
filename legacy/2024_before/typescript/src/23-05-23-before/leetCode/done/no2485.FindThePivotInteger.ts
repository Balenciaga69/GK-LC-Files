namespace lc2485 {
 pivotInteger(8);
 function pivotInteger(n: number): number {
  if (n === 1) return 1;
  const total = ((1 + n) * n) / 2;
  let sum = 0;
  for (let i = 1; i < n + 1; i++) {
   sum += i;
   if (sum === total - (i + 1) - sum) return i + 1;
  }
  return -1;
 }
}
