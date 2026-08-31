from typing import Optional
from dataStructure.ListNode import ListNode


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        val_set = set[ListNode]()
        while head is not None:
            if head in val_set:
                return True
            val_set.add(head)
            head = head.next
        return False


nod1 = ListNode(val=3)
nod2 = ListNode(val=2)
nod3 = ListNode(val=0)
nod4 = ListNode(val=-4)
nod1.next = nod2
nod2.next = nod3
nod3.next = nod4
nod4.next = nod2
Solution().hasCycle(nod1)
