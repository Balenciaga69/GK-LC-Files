namespace lc0004 {
 const a1 = [1, 2, 3];
 const a2 = [4, 5, 6, 7, 8, 9];
 findMedianSortedArrays(a1, a2);
 function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const totalLen = len1 + len2;
  // odd
  if (totalLen % 2 == 1) {
   return getKthMin((totalLen + 1) / 2);
  }
  // even
  else {
   return (getKthMin(totalLen / 2 + 1) + getKthMin(totalLen / 2)) / 2;
  }
  function getKthMin(k: number) {
   let i1 = 0;
   let i2 = 0;
   while (true) {
    if (i1 === len1) return nums2[i2 + k - 1];
    if (i2 === len2) return nums1[i1 + k - 1];
    if (k === 1) return Math.min(nums1[i1], nums2[i2]);
    // * * * * *  * * * * *
    const mid = Math.floor(k / 2);
    // 防止索引超出邊界 (陣列長短不一)
    // 向右推進 或 到底索引值 停下
    const j1 = Math.min(i1 + mid, len1) - 1;
    const j2 = Math.min(i2 + mid, len2) - 1;
    // 往更小的走
    // 計算這次 內縮之後 排除掉了幾個數字
    if (nums1[j1] < nums2[j2]) {
     k = k - (j1 - i1 + 1);
     i1 = j1 + 1;
    } else {
     k = k - (j2 - i2 + 1);
     i2 = j2 + 1;
    }
   }
  }
 }
}
