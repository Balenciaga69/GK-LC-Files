from collections import deque
from typing import List, Optional
from dataStructure.treeNode import TreeNode, listToTree

l1: list[int | None] = [1, None, 2, 3]
l2: list[int | None] = [1, 2, 3, 4, 5, None, 8, None, None, 6, 7, 9]


root1 = listToTree(l1)


class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []

        stack: deque[TreeNode] = deque()
        result: list[int] = []

        stack.append(root)

        while len(stack) > 0:
            curr_node = stack.pop()
            result.append(curr_node.val)
            if curr_node.right is not None:
                stack.append(curr_node.right)
            if curr_node.left is not None:
                stack.append(curr_node.left)
                continue
        return result


Solution().preorderTraversal(root=root1)
