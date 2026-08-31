import { insert } from '.'

describe('57. Insert Interval', () => {
  test('example 1', () => {
    const intervals = [
      [1, 3],
      [6, 9],
    ]
    const newInterval = [2, 5]
    expect(insert(intervals, newInterval)).toEqual([
      [1, 5],
      [6, 9],
    ])
  })

  test('example 2', () => {
    const intervals = [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ]
    const newInterval = [4, 8]
    expect(insert(intervals, newInterval)).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ])
  })

  test('new interval before all', () => {
    const intervals = [
      [3, 5],
      [7, 9],
    ]
    const newInterval = [1, 2]
    expect(insert(intervals, newInterval)).toEqual([
      [1, 2],
      [3, 5],
      [7, 9],
    ])
  })

  test('new interval after all', () => {
    const intervals = [
      [1, 2],
      [3, 4],
    ]
    const newInterval = [5, 6]
    expect(insert(intervals, newInterval)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  })

  test('full overlap', () => {
    const intervals = [
      [2, 3],
      [5, 7],
    ]
    const newInterval = [1, 10]
    expect(insert(intervals, newInterval)).toEqual([[1, 10]])
  })

  test('no overlap middle insert', () => {
    const intervals = [
      [1, 2],
      [6, 7],
    ]
    const newInterval = [3, 5]
    expect(insert(intervals, newInterval)).toEqual([
      [1, 2],
      [3, 5],
      [6, 7],
    ])
  })
})

test('test 154', () => {
  const intervals = [
    [0, 10],
    [14, 14],
    [15, 20],
  ]
  const newInterval = [11, 11]
  expect(insert(intervals, newInterval)).toEqual([
    [0, 10],
    [11, 11],
    [14, 14],
    [15, 20],
  ])
})
