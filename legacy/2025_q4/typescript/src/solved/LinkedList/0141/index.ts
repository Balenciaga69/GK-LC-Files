import { ListNode } from '../../../utils/listUtils'
/*
Date: 2025-10-25
Tags: Linked List, Two Pointers, Hash Table
---
給定一個鏈結串列的頭節點 head，判斷該鏈結串列中是否存在環（cycle）。
當某個節點可以透過不斷跟隨 next 指標再次被訪問到時，表示鏈結串列中存在環。
內部的變數 pos 用來表示尾節點的 next 指向哪個節點的索引位置，但這個參數不會在函式中傳入。
請回傳 true 如果存在環；否則回傳 false。
---
限制條件：
節點數量範圍：[0, 10^4]
節點值範圍：[-10^5, 10^5]
pos = -1 或是鏈結串列中有效的索引位置。
你能在 O(1)（常數）空間內解決這個問題嗎？
 */
export function hasCycle(head: ListNode | null): boolean {
  return twoPointerVersion(head)
}
function twoPointerVersion(head: ListNode | null): boolean {
  let [fast, slow] = [head, head]
  while (fast) {
    fast = fast?.next
    if (fast === slow) return true
    fast = fast?.next ?? null
    slow = slow?.next ?? null
  }
  return false
}
function hashSetVersion(head: ListNode | null): boolean {
  const set = new Set<ListNode>()
  let curr = head
  while (curr) {
    if (set.has(curr!)) return true
    set.add(curr!)
    curr = curr!.next
  }
  return false
}
/*
我這裡實作了兩個版本：
主要使用的是 twoPointerVersion，也就是常見的「快慢指針法」（Floyd’s Tortoise and Hare）。
具體做法是：
我用兩個指針 slow 和 fast，一開始都指向 head。
在每一次迴圈裡，fast 走兩步，slow 走一步。
如果鏈結串列中存在環，那麼在某個時間點上，fast 一定會追上 slow，這時我就回傳 true。
如果 fast 提前走到 null，代表沒有環，就回傳 false。
這個方法的好處是：
時間複雜度是 O(n)，因為每個節點最多被訪問兩次；
空間複雜度是 O(1)，因為我只用了兩個指標。
---
我同時也留了一個 hashSetVersion 作為參考版本。
那個版本透過 Set 來紀錄每個走訪過的節點，
如果發現某個節點已經存在於集合中，就代表有環。
這樣比較直觀、好理解，但空間複雜度是 O(n)，
不符合題目要求的 O(1) 空間解法。
*/
