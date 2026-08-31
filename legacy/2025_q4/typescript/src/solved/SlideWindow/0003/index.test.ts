import { lengthOfLongestSubstring } from '.'

describe('lengthOfLongestSubstring', () => {
  test('Example 1: "abcabcbb" → 3', () => {
    const s = 'abcabcbb'
    expect(lengthOfLongestSubstring(s)).toBe(3)
  })

  test('Example 2: "bbbbb" → 1', () => {
    const s = 'bbbbb'
    expect(lengthOfLongestSubstring(s)).toBe(1)
  })

  test('Example 3: "pwwkew" → 3', () => {
    const s = 'pwwkew'
    expect(lengthOfLongestSubstring(s)).toBe(3)
  })

  test('Handles empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0)
  })

  test('Handles all unique characters', () => {
    const s = 'abcdef'
    expect(lengthOfLongestSubstring(s)).toBe(6)
  })

  test('Handles string with spaces', () => {
    const s = 'a b c a b'
    expect(lengthOfLongestSubstring(s)).toBe(3)
  })

  test('Handles numbers and symbols', () => {
    const s = '123!@#123'
    expect(lengthOfLongestSubstring(s)).toBe(6)
  })

  test('Handles repeating pattern', () => {
    const s = 'abba'
    expect(lengthOfLongestSubstring(s)).toBe(2)
  })

  test('Handles long mixed input', () => {
    const s = 'dvdf'
    expect(lengthOfLongestSubstring(s)).toBe(3)
  })
})
