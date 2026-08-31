import { TreeNode } from "../../data-structure/class.treeNode";

namespace lc0094 {
  function inorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = [];
    travel(root);
    function travel(node: TreeNode | null) {
      if (node === null) return;
      travel(node.left);
      ans.push(node.val);
      travel(node.right);
    }
    return ans;
  }
}
