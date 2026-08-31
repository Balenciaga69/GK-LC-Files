import { kClosest } from './index'

describe('973. K Closest Points to Origin', () => {
  it('範例一', () => {
    expect(kClosest([[1,3],[-2,2]], 1)).toEqual([[-2,2]])
  })
  it('範例二', () => {
    expect(kClosest([[3,3],[5,-1],[-2,4]], 2)).toEqual([[3,3],[-2,4]])
  })
})
