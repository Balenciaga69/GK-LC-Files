// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
function maxVowels(s: string, k: number): number {
  const n = s.length
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let finalMax = 0
  let curMax = 0
  let l = 0
  for (let r = 0; r < n; r++) {
    if (r - l + 1 > k) {
      if (vowels.includes(s[l])) curMax--
      l++
    }
    if (vowels.includes(s[r])) curMax++
    finalMax = Math.max(finalMax, curMax)
  }
  return finalMax
}
