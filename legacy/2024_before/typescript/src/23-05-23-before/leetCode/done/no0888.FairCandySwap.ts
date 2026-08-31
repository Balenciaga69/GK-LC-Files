namespace lc0888 {
 function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  let aTotal = aliceSizes.reduce((p, c) => p + c);
  let bTotal = bobSizes.reduce((p, c) => p + c);
  const aSet = new Set(aliceSizes);
  const bSet = new Set(bobSizes);
  let fairTotal = (aTotal + bTotal) / 2;
  // * * * * *  * * * * *
  let result: [number, number] = [0, 0];
  let isFind = false;
  aSet.forEach(val => {
   if (isFind) return;
   const target = fairTotal - aTotal + val;
   if (bSet.has(target)) {
    result = [val, target];
    isFind = true;
   }
  });
  return result;
 }
 let aliceSizes = [1, 2, 5],
  bobSizes = [1, 3];
 fairCandySwap(aliceSizes, bobSizes);
}
