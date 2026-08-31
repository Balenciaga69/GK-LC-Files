from typing import Optional
from dataStructure.ListNode import arrayToLinkedListNode, ListNode


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        root: Optional[ListNode] = None
        curr_node: Optional[ListNode] = None
        curr_sum = 0
        while not (l1 is None and l2 is None and curr_sum == 0):
            # Add summed numbers
            if (l1 is not None):
                curr_sum += l1.val
                l1 = l1.next
            if (l2 is not None):
                curr_sum += l2.val
                l2 = l2.next

            # Init Root Node
            if root is None:
                root = curr_node = ListNode()
            elif curr_node is not None:
                curr_node.next = ListNode()
                curr_node = curr_node.next
            # Calculate summed
            if curr_node is not None:
                curr_node.val = curr_sum % 10
                curr_sum = curr_sum // 10
        return root


node1 = arrayToLinkedListNode([2, 4, 3])
node2 = arrayToLinkedListNode([5, 6, 4])
Solution().addTwoNumbers(node1, node2)

# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.

# Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]
