import { KthLargest } from './index'

describe('703. Kth Largest Element in a Stream', () => {
  it('範例一', () => {
    const kth = new KthLargest(3, [4,5,8,2])
    expect(kth.add(3)).toBe(4)
    expect(kth.add(5)).toBe(5)
    expect(kth.add(10)).toBe(5)
    expect(kth.add(9)).toBe(8)
    expect(kth.add(4)).toBe(8)
  })
})
