import { eraseOverlapIntervals } from '.'

describe('435. Non-overlapping Intervals', () => {
  test('Gay', () => {
    const intervals = [[0, 1]]
    expect(eraseOverlapIntervals(intervals)).toBe(0)
  })

  test('example 1', () => {
    const intervals = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
    ]
    expect(eraseOverlapIntervals(intervals)).toBe(1)
  })

  test('example 2', () => {
    const intervals = [
      [1, 2],
      [1, 2],
      [1, 2],
    ]
    expect(eraseOverlapIntervals(intervals)).toBe(2)
  })

  test('example 3', () => {
    const intervals = [
      [1, 2],
      [2, 3],
    ]
    expect(eraseOverlapIntervals(intervals)).toBe(0)
  })

  test('all overlapping', () => {
    const intervals = [
      [1, 5],
      [2, 6],
      [3, 7],
      [4, 8],
    ]
    expect(eraseOverlapIntervals(intervals)).toBe(3)
  })

  test('already non-overlapping', () => {
    const intervals = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    expect(eraseOverlapIntervals(intervals)).toBe(0)
  })
})
