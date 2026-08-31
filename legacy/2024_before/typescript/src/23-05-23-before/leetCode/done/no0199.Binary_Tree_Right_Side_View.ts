import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc0199 {
  function rightSideView(root: TreeNode | null): number[] {
    const ans: number[] = [];
    if (!root) return ans;
    fun(root, 0);
    function fun(node: TreeNode, deep: number): void {
      if (ans[deep] === undefined) ans.push(node.val); // depth node is not exist
      if (node.right) fun(node.right, deep + 1);
      if (node.left) fun(node.left, deep + 1);
    }
    return ans;
  }
  const ipt = arrayToBST([1, 2, 0]);
  rightSideView(ipt);
}
