from typing import List


class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        evenCount = 0
        for n in nums:
            digits = self.getDigit(n)
            if digits % 2 == 0:
                evenCount += 1
        return evenCount

    def getDigit(self, num: int) -> int:
        if num < 10:
            return 1

        digits = 0
        while num > 0:
            num = num // 10
            digits += 1
        return digits


Solution().findNumbers([1, 23, 456, 7890])
