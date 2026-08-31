import { MedianFinder } from './index'

describe('295. Find Median from Data Stream', () => {
  it('範例一', () => {
    const mf = new MedianFinder()
    mf.addNum(1)
    mf.addNum(2)
    expect(mf.findMedian()).toBe(1.5)
    mf.addNum(3)
    expect(mf.findMedian()).toBe(2)
  })
})
