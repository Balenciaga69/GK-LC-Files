from typing import Union


class ListNode:
    def __init__(self, val: int = 0, n_e_x_t: Union['ListNode', None] = None):
        self.val = val
        self.next = n_e_x_t


def arrayToLinkedListNode(array: list[int]) -> ListNode:
    root: ListNode | None = None
    curr_node = None
    for val in array:
        if curr_node is None:
            curr_node = root = ListNode()
        else:
            curr_node.next = ListNode()
            curr_node = curr_node.next
        curr_node.val = val
    return ListNode() if root is None else root



