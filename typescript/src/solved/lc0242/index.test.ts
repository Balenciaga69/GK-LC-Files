import { isAnagram } from './index'

describe('242. Valid Anagram', () => {
  it('範例1: 是異位詞', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true)
  })

  it('範例2: 不是異位詞', () => {
    expect(isAnagram('rat', 'car')).toBe(false)
  })

  it('長度不同', () => {
    expect(isAnagram('a', 'ab')).toBe(false)
  })

  it('空字串', () => {
    expect(isAnagram('', '')).toBe(true)
  })
})
