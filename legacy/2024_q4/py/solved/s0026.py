from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        if len(nums) == 1:
            return nums[0]

        repeat_idx = 1
        prev_val = nums[0]

        for idx in range(1, len(nums)):
            if nums[idx] != prev_val:
                prev_val = nums[idx]
                nums[repeat_idx] = nums[idx]
                repeat_idx += 1

        return repeat_idx


Solution().removeDuplicates([0, 1, 2, 2, 2, 2, 2, 3, 3])
# Solution().removeDuplicates([9, 10, 11])
