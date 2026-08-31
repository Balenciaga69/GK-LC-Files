namespace lc0283 {
 moveZeroes([0, 1, 0, 3, 2]);
 function moveZeroes(nums: number[]): void {
  let slow = 0;
  for (let i = 0; i < nums.length; i++) if (nums[i]) nums[slow++] = nums[i];
  for (let i = slow; i < nums.length; i++) nums[i] = 0;
 }
}
