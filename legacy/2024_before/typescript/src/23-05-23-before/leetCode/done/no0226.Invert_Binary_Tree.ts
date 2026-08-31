import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";
namespace lc0226 {
  function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    fun(root);
    function fun(node: TreeNode) {
      if (node.left) fun(node.left);
      if (node.right) fun(node.right);
      if (node.right || node.left) {
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
      }
    }
    return root;
  }
  const ipt = arrayToBST([4, 2, 7, 1, 3, 6, 9]);
  invertTree(ipt);
}
