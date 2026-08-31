from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        if len(nums) == 1:
            return nums[0]

        max_sum = nums[0]
        curr_sum = nums[0]
        for n in nums[1:]:
            if curr_sum < 0:
                curr_sum = n
            else:
                curr_sum += n
            max_sum = max(max_sum, curr_sum)
        return max_sum


Solution().maxSubArray([5,4,-1,7,8])
