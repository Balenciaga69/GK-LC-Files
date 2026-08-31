from collections import deque
from typing import List, Optional
from dataStructure.treeNode import TreeNode, listToTree


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []

        result: List[List[int]] = []
        queue: deque[TreeNode] = deque()
        queue.append(root)

        curr_layer_list: list[int] = []
        curr_layer_count = 0
        parent_total = 1
        children_total = 0
        while len(queue) > 0:
            # part 1 dequeue node
            node = queue.popleft()
            curr_layer_count += 1
            curr_layer_list.append(node.val)
            # part 2 enqueue node
            if node.left is not None:
                queue.append(node.left)
                children_total += 1
            if node.right is not None:
                queue.append(node.right)
                children_total += 1
            # part 3 Reset Status
            if curr_layer_count == parent_total:
                parent_total = children_total
                children_total = 0
                curr_layer_count = 0
                result.append(curr_layer_list)
                curr_layer_list = []

        return result


myLs: list[int | None] = [1, 2, 3, 4, 5, None, 8, None, None, 6, 7, 9]
myRoot = listToTree(myLs)
myAnswer = Solution().levelOrder(myRoot)
