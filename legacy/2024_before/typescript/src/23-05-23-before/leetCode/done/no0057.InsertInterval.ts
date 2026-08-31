namespace lc0057 {
 function insert(oAry: number[][], nAry: number[]): number[][] {
  const small: number[][] = [];
  const big: number[][] = [];
  for (let i = 0; i < oAry.length; i++) {
   if (oAry[i][1] < nAry[0]) small.push(oAry[i]);
   else if (oAry[i][0] > nAry[1]) big.push(oAry[i]);
   else {
    nAry[0] = Math.min(nAry[0], oAry[i][0]);
    nAry[1] = Math.max(nAry[1], oAry[i][1]);
   }
  }
  return [...small, nAry, ...big];
 }
}
