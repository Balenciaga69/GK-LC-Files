import { canReach } from './index'

describe('LeetCode 1306. Jump Game III', () => {
  it('範例一: arr = [4,2,3,0,3,1,2], start = 5 應回傳 true', () => {
    expect(canReach([4, 2, 3, 0, 3, 1, 2], 5)).toBe(true)
  })

  it('範例二: arr = [4,2,3,0,3,1,2], start = 0 應回傳 true', () => {
    expect(canReach([4, 2, 3, 0, 3, 1, 2], 0)).toBe(true)
  })

  it('範例三: arr = [3,0,2,1,2], start = 2 應回傳 false', () => {
    expect(canReach([3, 0, 2, 1, 2], 2)).toBe(false)
  })

  it('只有一格且為0: arr = [0], start = 0 應回傳 true', () => {
    expect(canReach([0], 0)).toBe(true)
  })

  it('只有一格且不為0: arr = [1], start = 0 應回傳 false', () => {
    expect(canReach([1], 0)).toBe(false)
  })

  it('可往回跳: arr = [2,4,2,0,0,1,3,3,3,4], start = 5 應回傳 true', () => {
    expect(canReach([2, 4, 2, 0, 0, 1, 3, 3, 3, 4], 5)).toBe(true)
  })
})
