// wordBreak.test.ts
import { wordBreak } from '.'

describe('139. Word Break', () => {
  test('Example 1', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true)
  })

  test('Example 2', () => {
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true)
  })

  test('Example 3', () => {
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(false)
  })

  test('Edge Case - Empty string', () => {
    expect(wordBreak('', ['a'])).toBe(true) // 空字串視為可分割
  })

  test('WordDict with overlapping words', () => {
    expect(wordBreak('aaaaaaa', ['aaaa', 'aaa'])).toBe(true)
  })
})
