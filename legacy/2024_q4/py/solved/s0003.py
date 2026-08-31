from typing import List

# 3_Longest_Substring_Without_Repeating_Characters


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
      #  提前例外
        if len(s) < 2:
            return len(s)

        c_set: set[str] = set()
        max_len = 0
        slow = 0
        fast = 0
        while fast < len(s):
            c = s[fast]
            while c in c_set:
                c_set.remove(s[slow])
                slow += 1
            c_set.add(c)
            fast += 1
            max_len = max(max_len, fast-slow)

        return max_len


Solution().lengthOfLongestSubstring('abcabcbb')  # 3 abc
Solution().lengthOfLongestSubstring('bbbbb')  # 1 b
Solution().lengthOfLongestSubstring('pwwkew')  # 3 wke
