namespace lc0016 {
  function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let compareAbsVal = Infinity;
    let ans = Infinity;
    let rightEdge = nums.length;

    for (let a1 = 0; a1 < rightEdge; a1++) {
      if (a1 > 0 && nums[a1] === nums[a1 - 1]) continue;
      for (let a2 = a1 + 1; a2 < rightEdge; a2++) {
        if (a2 > a1 + 1 && nums[a2] === nums[a2 - 1]) continue;
        for (let a3 = a2 + 1; a3 < rightEdge; a3++) {
          if (a3 > a2 + 1 && nums[a3] === nums[a3 - 1]) continue;
          const sum = nums[a1] + nums[a2] + nums[a3];
          if (Math.abs(sum - target) < Math.abs(ans - target)) {
            ans = sum;
            if (ans === target) return ans;
          }
        }
      }
    }
    return ans;
  }
  const input = [0, 3, 97, 102, 200];
  const result = threeSumClosest(input, 300);
  console.log(`正在測試...`, result);
}
// function threeSumClosest(nums: number[], target: number): number {
//   nums = nums.sort((a, b) => a - b);
//   const n = nums.length;
//   let res = Infinity;
//   for (let i = 0; i < n; i++) {
//     let l = i + 1,
//       r = n - 1;
//     while (l < r) {
//       const sum = nums[i] + nums[l] + nums[r];
//       if (sum === target) return sum;
//       else {
//         if (Math.abs(target - res) > Math.abs(target - sum)) {
//           res = sum;
//         }
//         if (sum > target) r--;
//         else l++;
//       }
//     }
//   }
//   return res;
// }
