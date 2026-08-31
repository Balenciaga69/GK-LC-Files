class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t) or len(s) == 0 or len(t) == 0:
            return False

        sDict: dict[str, int] = {}
        tDict: dict[str, int] = {}

        for c in s:
            sDict[c] = sDict.get(c, 0)+1
        for c in t:
            tDict[c] = tDict.get(c, 0)+1
        return sDict == tDict


print(Solution().isAnagram('anagram', 'nagaram'))
