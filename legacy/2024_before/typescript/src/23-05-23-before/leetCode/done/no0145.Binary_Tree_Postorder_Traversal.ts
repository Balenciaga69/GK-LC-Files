import { TreeNode } from "../../data-structure/class.treeNode";

namespace lc0145 {
  function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    fun(root);
    function fun(node: TreeNode | null) {
      if (node === null) return;
      node.left && fun(node.left);
      node.right && fun(node.right);
      result.push(node.val);
    }
    return result;
  }
}
