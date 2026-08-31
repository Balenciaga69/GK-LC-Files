# https://leetcode.com/problems/two-sum/description/
from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numMap: dict[int, int] = {}
        for idx, val in enumerate(nums):
            matchedIdx = numMap.get(target - val)
            if matchedIdx is not None:
                return [matchedIdx, idx]
            else:
                numMap[val] = idx
        return []
