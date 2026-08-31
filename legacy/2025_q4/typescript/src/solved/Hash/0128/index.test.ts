import { longestConsecutive } from '.'

describe('longestConsecutive', () => {
  test('Example 1: [100,4,200,1,3,2] → 4', () => {
    const nums = [100, 4, 200, 1, 3, 2]
    expect(longestConsecutive(nums)).toBe(4)
  })

  test('Example 2: [0,3,7,2,5,8,4,6,0,1] → 9', () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
    expect(longestConsecutive(nums)).toBe(9)
  })

  test('Example 3: [1,0,1,2] → 3', () => {
    const nums = [1, 0, 1, 2]
    expect(longestConsecutive(nums)).toBe(3)
  })

  test('Handles empty array', () => {
    expect(longestConsecutive([])).toBe(0)
  })

  test('Handles single element', () => {
    expect(longestConsecutive([10])).toBe(1)
  })

  test('Handles all duplicates', () => {
    expect(longestConsecutive([5, 5, 5, 5])).toBe(1)
  })

  test('Handles negative numbers', () => {
    const nums = [-2, -1, 0, 1, 2]
    expect(longestConsecutive(nums)).toBe(5)
  })

  test('Handles unordered sequence with gaps', () => {
    const nums = [10, 5, 11, 7, 8, 6]
    expect(longestConsecutive(nums)).toBe(4)
  })
})
