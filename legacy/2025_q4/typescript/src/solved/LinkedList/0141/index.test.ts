import { hasCycle } from '.'
import { createLinkedList } from '../../../utils/listUtils'

describe('hasCycle', () => {
  it('returns true for list [3,2,0,-4] with pos = 1', () => {
    const head = createLinkedList([3, 2, 0, -4], 1)
    expect(hasCycle(head)).toBe(true)
  })

  it('returns true for list [1,2] with pos = 0', () => {
    const head = createLinkedList([1, 2], 0)
    expect(hasCycle(head)).toBe(true)
  })

  it('returns false for list [1] with pos = -1', () => {
    const head = createLinkedList([1], -1)
    expect(hasCycle(head)).toBe(false)
  })

  it('returns false for empty list', () => {
    const head = createLinkedList([], -1)
    expect(hasCycle(head)).toBe(false)
  })

  it('returns false for list [1,2,3] with pos = -1 (no cycle)', () => {
    const head = createLinkedList([1, 2, 3], -1)
    expect(hasCycle(head)).toBe(false)
  })

  it('returns true for self-loop single node [1], pos = 0', () => {
    const head = createLinkedList([1], 0)
    expect(hasCycle(head)).toBe(true)
  })
})
