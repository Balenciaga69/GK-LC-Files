import { isSameTree } from './index'
import { createBinaryTree } from '../../utils/treeUtils'

describe('100. Same Tree', () => {
  it('範例1: 結構與值皆相同', () => {
    const p = createBinaryTree([1, 2, 3])
    const q = createBinaryTree([1, 2, 3])
    expect(isSameTree(p, q)).toBe(true)
  })

  it('範例2: 結構不同', () => {
    const p = createBinaryTree([1, 2])
    const q = createBinaryTree([1, null, 2])
    expect(isSameTree(p, q)).toBe(false)
  })

  it('範例3: 結構相同但值不同', () => {
    const p = createBinaryTree([1, 2, 1])
    const q = createBinaryTree([1, 1, 2])
    expect(isSameTree(p, q)).toBe(false)
  })

  it('兩個皆為空樹', () => {
    expect(isSameTree(null, null)).toBe(true)
  })

  it('其中一個為空樹', () => {
    const p = createBinaryTree([1])
    expect(isSameTree(p, null)).toBe(false)
    expect(isSameTree(null, p)).toBe(false)
  })

  it('複雜的相同樹', () => {
    const p = createBinaryTree([1, 2, 3, 4, 5, 6, 7])
    const q = createBinaryTree([1, 2, 3, 4, 5, 6, 7])
    expect(isSameTree(p, q)).toBe(true)
  })

  it('複雜的不同樹', () => {
    const p = createBinaryTree([1, 2, 3, 4, 5, 6, 7])
    const q = createBinaryTree([1, 2, 3, 4, 5, 6, 8])
    expect(isSameTree(p, q)).toBe(false)
  })
})
