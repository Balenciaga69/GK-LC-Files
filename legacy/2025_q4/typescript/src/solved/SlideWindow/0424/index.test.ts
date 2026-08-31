import { characterReplacement } from '.'

describe('424. Longest Repeating Character Replacement', () => {
  test('Example 1: basic ABAB with k = 2', () => {
    expect(characterReplacement('ABAB', 2)).toBe(4)
  })

  test('Example 2: AABABBA with k = 1', () => {
    expect(characterReplacement('AABABBA', 1)).toBe(4)
  })

  test('All same letters, no change needed', () => {
    expect(characterReplacement('AAAA', 2)).toBe(4)
  })

  test('No changes allowed (k = 0)', () => {
    expect(characterReplacement('AABABBA', 0)).toBe(2)
  })

  test('Edge case: single character', () => {
    expect(characterReplacement('A', 1)).toBe(1)
  })

  test('Edge case: empty string', () => {
    expect(characterReplacement('', 2)).toBe(0)
  })

  test('Different characters but large k', () => {
    expect(characterReplacement('ABCDEFG', 10)).toBe(7)
  })
})
