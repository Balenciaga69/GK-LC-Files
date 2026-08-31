import { findKthLargest } from './index'

describe('215. Kth Largest Element in an Array', () => {
  it('範例一', () => {
    expect(findKthLargest([3,2,1,5,6,4], 2)).toBe(5)
  })
  it('範例二', () => {
    expect(findKthLargest([3,2,3,1,2,4,5,5,6], 4)).toBe(4)
  })
})
