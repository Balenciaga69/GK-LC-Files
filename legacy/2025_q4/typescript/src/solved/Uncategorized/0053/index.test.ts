import { maxSubArray } from './index'

describe('53. Maximum Subarray', () => {
  it('範例一', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  })

  it('範例二', () => {
    expect(maxSubArray([1])).toBe(1)
  })

  it('範例三', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23)
  })

  it('全部為負數', () => {
    expect(maxSubArray([-2, -3, -1, -4])).toBe(-1)
  })

  it('單一元素為 0', () => {
    expect(maxSubArray([0])).toBe(0)
  })
})
