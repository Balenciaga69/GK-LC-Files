// https://leetcode.com/problems/longest-palindromic-substring
// 20:51 ->
export function longestPalindrome(s: string): string {
  const n = s.length
  if (n <= 1) return s.substring(0, n)
  const maxState = {
    longest: 1,
    left: 0,
    right: 0,
  }

  const mainFunc = (left: number, right: number) => {
    while (left > -1 && right < n && s[left] === s[right]) {
      const curLength = right - left + 1
      if (maxState.longest < curLength) {
        maxState.longest = curLength
        maxState.left = left
        maxState.right = right
      }
      left--
      right++
    }
  }

  for (let i = 0; i < n; i++) {
    mainFunc(i - 1, i + 1)
    mainFunc(i, i + 1)
  }

  return s.substring(maxState.left, maxState.right + 1)
}
