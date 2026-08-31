import { findClosestElements } from './index'

describe('658. Find K Closest Elements', () => {
  it('範例一', () => {
    expect(findClosestElements([1,2,3,4,5], 4, 3)).toEqual([1,2,3,4])
  })
  it('範例二', () => {
    expect(findClosestElements([1,2,3,4,5], 4, -1)).toEqual([1,2,3,4])
  })
})
