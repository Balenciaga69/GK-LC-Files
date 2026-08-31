from __future__ import annotations
from collections import deque


class TreeNode:
    def __init__(self, val: int = 0, left: 'TreeNode' | None = None, right: 'TreeNode' | None = None) -> None:
        self.val = val
        self.left = left
        self.right = right


def listToTree(ls: list[int | None]) -> TreeNode | None:
    # Boundary
    if len(ls) == 0:
        return None

    index = 0

    def popLeft() -> int | None:
        nonlocal index
        result = None if index >= len(ls) else ls[index]
        index += 1
        return result

    # Node Queue
    root = TreeNode()
    node_q = deque[TreeNode]()
    node_q.append(root)

    # Set root value
    val = popLeft()
    if val is not None:
        root.val = val

    while len(node_q) > 0:
        curr_node = node_q.popleft()
        print(curr_node.val)
        # left
        left_val = popLeft()
        if left_val is not None:
            curr_node.left = TreeNode()
            curr_node.left.val = left_val
            node_q.append(curr_node.left)
        # right
        right_val = popLeft()
        if right_val is not None:
            curr_node.right = TreeNode()
            curr_node.right.val = right_val
            node_q.append(curr_node.right)
    return root
