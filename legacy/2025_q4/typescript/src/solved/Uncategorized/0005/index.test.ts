import { longestPalindrome } from './index'

describe('Longest Palindromic Substring', () => {
  test('範例一', () => {
    expect(longestPalindrome('babad')).toMatch(/bab|aba/)
  })

  test('範例二', () => {
    expect(longestPalindrome('cbbd')).toBe('bb')
  })

  test('單一字元', () => {
    expect(longestPalindrome('a')).toBe('a')
  })

  test('兩個不同字元', () => {
    expect(longestPalindrome('ac')).toBe('a')
  })

  test('bb', () => {
    expect(longestPalindrome('bb')).toBe('bb')
  })

  test('整段是回文', () => {
    expect(longestPalindrome('racecar')).toBe('racecar')
  })

  test('中間有多個回文', () => {
    expect(longestPalindrome('abaxyzzyxf')).toBe('xyzzyx')
  })
})
