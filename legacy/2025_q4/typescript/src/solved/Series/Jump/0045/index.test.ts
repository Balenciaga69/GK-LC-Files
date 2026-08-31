// jest
import { jump } from './index'

describe('LeetCode 45. Jump Game II', () => {
  it('範例一: [2,3,1,1,4] 應回傳 2', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2)
  })

  it('範例二: [2,3,0,1,4] 應回傳 2', () => {
    expect(jump([2, 3, 0, 1, 4])).toBe(2)
  })

  it('單一元素: [0] 應回傳 0', () => {
    expect(jump([0])).toBe(0)
  })

  it('全部為1: [1,1,1,1] 應回傳 3', () => {
    expect(jump([1, 1, 1, 1])).toBe(3)
  })

  it('321: [3,2,1] 應回傳 1', () => {
    expect(jump([3, 2, 1])).toBe(1)
  })

  it('中間有0但可跨過: [2,0,2,0,1] 應回傳 2', () => {
    expect(jump([2, 0, 2, 0, 1])).toBe(2)
  })
})
