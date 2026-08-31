from collections import deque
from typing import List, Optional
from dataStructure.treeNode import TreeNode, listToTree


l1: list[int | None] = [1, None, 2, 3]
l2: list[int | None] = [1, 2, 3, 4, 5, None, 8, None, None, 6, 7, 9]


root1 = listToTree(l2)


class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        ls: list[int] = []
        stack = deque[TreeNode]()
        stack.append(root)

        while len(stack) > 0:
            curr_node = stack[-1]
            if curr_node.left is None:
                # Mid
                ls.append(curr_node.val)
                stack.pop()

                # Right
                if curr_node.right is not None:
                    stack.append(curr_node.right)
                    curr_node.right = None

            else:
                # Left
                stack.append(curr_node.left)
                curr_node.left = None

        return ls


xxx = Solution().inorderTraversal(root=root1)
print(xxx)
