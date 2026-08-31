import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc1448 {
  function goodNodes(root: TreeNode | null): number {
    let count = 0;
    if (!root) return count;
    fun(root, -Infinity);
    return count;
    function fun(node: TreeNode, bigNum: number): void {
      if (node.val >= bigNum) count++;
      bigNum = Math.max(bigNum, node.val);
      if (node.left) fun(node.left, bigNum);
      if (node.right) fun(node.right, bigNum);
    }
  }
  const ipt = arrayToBST([3, 1, 4, 3, null, 1, 5]);
  goodNodes(ipt);
}
