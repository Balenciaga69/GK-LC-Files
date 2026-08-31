import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc0104 {
  function maxDepth(root: TreeNode | null): number {
    let maxVal = 0;
    getDepth(root);
    return maxVal;
    function getDepth(node: TreeNode | null): number {
      if (node === null) return 0;
      const left = getDepth(node.left);
      const right = getDepth(node.right);
      const depth = Math.max(left, right) + 1;
      maxVal = Math.max(maxVal, depth);
      return depth;
    }
  }
  const ipt = arrayToBST([3, 9, 20, null, null, 15, 7]);
  maxDepth(ipt);
}
