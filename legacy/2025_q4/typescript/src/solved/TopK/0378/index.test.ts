import { kthSmallest } from './index'

describe('378. Kth Smallest Element in a Sorted Matrix', () => {
  it('範例一', () => {
    expect(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8)).toBe(13)
  })
  it('範例二', () => {
    expect(kthSmallest([[-5]], 1)).toBe(-5)
  })
})
