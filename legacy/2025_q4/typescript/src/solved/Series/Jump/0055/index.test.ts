// jest
import { canJump } from '.'

describe('LeetCode 55. Jump Game', () => {
  it('範例一: [2,3,1,1,4] 應回傳 true', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true)
  })

  it('範例二: [3,2,1,0,4] 應回傳 false', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false)
  })

  it('單一元素: [0] 應回傳 true', () => {
    expect(canJump([0])).toBe(true)
  })

  it('全部可達: [4,3,2,1,0,0,0] 應回傳 true', () => {
    expect(canJump([4, 3, 2, 1, 0, 0, 0])).toBe(true)
  })

  it('最後一格無法到達: [2,0,0,0,1] 應回傳 false', () => {
    expect(canJump([2, 0, 0, 0, 1])).toBe(false)
  })

  it('大數據: [5,4,3,2,1,0,0] 應回傳 false', () => {
    expect(canJump([5, 4, 3, 2, 1, 0, 0])).toBe(false)
  })

  it('全部為1: [1,1,1,1,1] 應回傳 true', () => {
    expect(canJump([1, 1, 1, 1, 1])).toBe(true)
  })

  it('中間有0但可跨過: [2,0,2,0,1] 應回傳 true', () => {
    expect(canJump([2, 0, 2, 0, 1])).toBe(true)
  })
})
