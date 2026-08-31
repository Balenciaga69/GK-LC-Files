/*
Tags: Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort
Date: 2025-11-04
TimeSpent: 30 mins
---
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.
---
Constraints:
k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 10^4.
 */

import { ListNode } from "../../../../utils/listUtils"



export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists || lists.length === 0) return null
  
  while (lists.length > 1) {
    const mergedLists: Array<ListNode | null> = []
    
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i]
      const l2 = i + 1 < lists.length ? lists[i + 1] : null
      mergedLists.push(mergeTwoLists(l1, l2))
    }
    
    lists = mergedLists
  }
  
  return lists[0]
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode()
  let current = dummy
  
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }
  
  current.next = l1 || l2
  return dummy.next
}

/*
我這題使用分治法（Divide and Conquer）的思路來解決。
核心想法是把 k 個鏈表兩兩配對合併，直到剩下一個鏈表為止。

具體步驟：
1. 第一輪：每兩個鏈表合併成一個，k 個變成 k/2 個
2. 第二輪：再次兩兩合併，k/2 個變成 k/4 個  
3. 持續下去直到只剩一個鏈表

mergeTwoLists 函數負責合併兩個已排序的鏈表，這是經典的合併排序中的合併操作。
---
時間複雜度：
O(N * log k)，其中 N 是所有鏈表中節點總數，k 是鏈表數量
- 總共有 log k 輪合併
- 每輪合併的總節點數是 N

空間複雜度：
O(1)，只使用了常數額外空間（不算遞歸調用棧）
*/
