import { getSkyline } from '.'

test('example 1', () => {
  const buildings = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]
  const result = getSkyline(buildings)
  expect(result).toEqual([[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]])
})

test('example 2', () => {
  const buildings = [[0, 2, 3], [2, 5, 3]]
  const result = getSkyline(buildings)
  expect(result).toEqual([[0, 3], [5, 0]])
})

test('single building', () => {
  const buildings = [[1, 3, 2]]
  const result = getSkyline(buildings)
  expect(result).toEqual([[1, 2], [3, 0]])
})

test('non-overlapping buildings', () => {
  const buildings = [[1, 2, 1], [3, 4, 2], [5, 6, 3]]
  const result = getSkyline(buildings)
  expect(result).toEqual([[1, 1], [2, 0], [3, 2], [4, 0], [5, 3], [6, 0]])
})

test('completely overlapping buildings', () => {
  const buildings = [[1, 4, 2], [2, 3, 4]]
  const result = getSkyline(buildings)
  expect(result).toEqual([[1, 2], [2, 4], [3, 2], [4, 0]])
})

test('same height buildings', () => {
  const buildings = [[1, 3, 2], [2, 4, 2], [5, 7, 1]]
  const result = getSkyline(buildings)
  expect(result).toEqual([[1, 2], [4, 0], [5, 1], [7, 0]])
})

test('edge case: adjacent buildings with same height', () => {
  const buildings = [[0, 2, 3], [2, 5, 3]]
  const result = getSkyline(buildings)
  expect(result).toEqual([[0, 3], [5, 0]])
})
