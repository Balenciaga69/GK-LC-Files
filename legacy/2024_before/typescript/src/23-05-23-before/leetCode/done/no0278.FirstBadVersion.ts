namespace lc0278 {
 const solution = function (isBadVersion: any) {
  return function (n: number): number {
   let l = 1;
   let r = n;
   while (l < r) {
    const m = ((l + r) / 2) | 0;
    if (isBadVersion(m)) r = m;
    else l = m + 1;
   }
   return l;
  };
 };
}
