import { candy } from '.'
describe('135. Candy', () => {
  test('範例 1', () => {
    expect(candy([1, 0, 2])).toBe(5)
  })
  test('範例 2', () => {
    expect(candy([1, 2, 2])).toBe(4)
  })
  test('遞增序列', () => {
    expect(candy([1, 2, 3, 4, 5])).toBe(15) // [1,2,3,4,5]
  })
  test('遞減序列', () => {
    expect(candy([5, 4, 3, 2, 1])).toBe(15) // [5,4,3,2,1]
  })
})
