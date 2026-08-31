import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc0124 {
  function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity;
    const func = (node: TreeNode) => {
      let leftVal = 0;
      let rightVal = 0;
      if (node.left) leftVal = Math.max(func(node.left), 0);
      if (node.right) rightVal = Math.max(func(node.right), 0);
      maxSum = Math.max(node.val + leftVal + rightVal, maxSum);
      //   只能選一條走 , 選cp值最高的走
      return node.val + Math.max(leftVal, rightVal);
    };
    if (!root) return 0;
    func(root);
    return maxSum;
  }
  maxPathSum(arrayToBST([-10, 9, 20, null, null, 15, 7]));
}
