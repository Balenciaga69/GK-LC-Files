namespace lc0349 {
 function intersection(nums1: number[], nums2: number[]): number[] {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const res: number[] = [];
  s1.forEach(key => {
   if (s2.has(key)) res.push(key);
  });
  return res;
 }
}
