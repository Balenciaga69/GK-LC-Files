import { mergeKLists } from '.'
import { createLinkedList, linkedListToArray, ListNode } from '../../../../utils/listUtils'

test('example 1', () => {
  const lists = [
    createLinkedList([1, 4, 5]),
    createLinkedList([1, 3, 4]),
    createLinkedList([2, 6])
  ]
  const result = mergeKLists(lists)
  expect(linkedListToArray(result)).toEqual([1, 1, 2, 3, 4, 4, 5, 6])
})

test('example 2', () => {
  const lists: Array<ListNode | null> = []
  const result = mergeKLists(lists)
  expect(linkedListToArray(result)).toEqual([])
})

test('example 3', () => {
  const lists = [null]
  const result = mergeKLists(lists)
  expect(linkedListToArray(result)).toEqual([])
})

test('single list', () => {
  const lists = [createLinkedList([1, 2, 3])]
  const result = mergeKLists(lists)
  expect(linkedListToArray(result)).toEqual([1, 2, 3])
})

test('empty and non-empty lists', () => {
  const lists = [
    createLinkedList([]),
    createLinkedList([1, 2])
  ]
  const result = mergeKLists(lists)
  expect(linkedListToArray(result)).toEqual([1, 2])
})
