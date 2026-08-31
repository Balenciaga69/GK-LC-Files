import { kSmallestPairs } from '.'

test('example 1', () => {
  const nums1 = [1, 7, 11]
  const nums2 = [2, 4, 6]
  const k = 3
  const result = kSmallestPairs(nums1, nums2, k)
  expect(result).toEqual([[1, 2], [1, 4], [1, 6]])
})

test('example 2', () => {
  const nums1 = [1, 1, 2]
  const nums2 = [1, 2, 3]
  const k = 2
  const result = kSmallestPairs(nums1, nums2, k)
  expect(result).toEqual([[1, 1], [1, 1]])
})

test('example 3', () => {
  const nums1 = [1, 2]
  const nums2 = [3]
  const k = 3
  const result = kSmallestPairs(nums1, nums2, k)
  expect(result).toEqual([[1, 3], [2, 3]])
})

test('k larger than possible pairs', () => {
  const nums1 = [1, 2]
  const nums2 = [3, 4]
  const k = 10
  const result = kSmallestPairs(nums1, nums2, k)
  expect(result).toEqual([[1, 3], [1, 4], [2, 3], [2, 4]])
})

test('single element arrays', () => {
  const nums1 = [1]
  const nums2 = [2]
  const k = 1
  const result = kSmallestPairs(nums1, nums2, k)
  expect(result).toEqual([[1, 2]])
})

test('negative numbers', () => {
  const nums1 = [-1, 1, 2]
  const nums2 = [1, 2, 3]
  const k = 3
  const result = kSmallestPairs(nums1, nums2, k)
  expect(result).toEqual([[-1, 1], [-1, 2], [-1, 3]])
})
