import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc0543 {
  function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDepth = 0;
    getDeep(root);
    return maxDepth;
    function getDeep(node: TreeNode | null): number {
      if (node === null) return 0;
      let left = getDeep(node.left);
      let right = getDeep(node.right);
      maxDepth = Math.max(maxDepth, left + right);
      return Math.max(left, right) + 1;
    }
  }
  const ipt = arrayToBST([]);
  diameterOfBinaryTree(ipt);
}
// function diameterOfBinaryTree(root: TreeNode | null): number {
//     let maxDepth = 0;
//     getDeep(root);
//     return maxDepth;
//     function getDeep(node: TreeNode | null): number {
//       if (node === null) return 0;
//       console.log("curr Node = ", node.val);
//       let left = getDeep(node.left);
//       let right = getDeep(node.right);
//       maxDepth = Math.max(maxDepth, left + right);
//       let nodeLength = Math.max(left, right) + 1;
//       return nodeLength;
//     }
//   }
