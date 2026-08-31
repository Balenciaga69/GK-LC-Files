from typing import Optional
from dataStructure.ListNode import arrayToLinkedListNode, ListNode


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        prev: Optional[ListNode] = None
        curr: Optional[ListNode] = head
        while curr:
            next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
        return prev


node1 = arrayToLinkedListNode([1, 2, 3])
Solution().reverseList(node1)
