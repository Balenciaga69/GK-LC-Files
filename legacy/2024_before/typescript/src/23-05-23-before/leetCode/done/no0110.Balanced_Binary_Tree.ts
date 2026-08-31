import { match } from "assert";
import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc0110 {
  function isBalanced(root: TreeNode | null): boolean {
    let bool = true;
    getDeep(root);
    return bool;
    // 回傳左右誰最深
    function getDeep(node: TreeNode | null): number {
      if (!bool) return 0; // 已經不平衡 就不要執行了
      if (node == null) return 0; // 見底時
      const leftLength = getDeep(node.left);
      const rightLength = getDeep(node.right);
      if (Math.abs(leftLength - rightLength) > 1) bool = false; //不平衡
      return Math.max(leftLength, rightLength) + 1; //回傳 左右最深的深度
    }
  }
  const ipt = arrayToBST([1, 2, 2, 3, 3, null, null, 4, 4]);
  isBalanced(ipt);
}
