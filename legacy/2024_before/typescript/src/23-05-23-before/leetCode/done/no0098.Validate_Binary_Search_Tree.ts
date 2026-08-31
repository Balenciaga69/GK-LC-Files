import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc0098 {
  function isValidBST_中序(root: TreeNode | null): boolean {
    /**
     * 中序
     * 往左
     * 左到底 往中
     * 中過 往右到底
     *
     */
    const stack: TreeNode[] = [];
    let node = root;
    let lastVal = -Infinity;
    // node還能往下探勘時
    // 不能探勘 但 stack仍待處理時
    while (node || stack.length > 0) {
      // 一路向左 直到見底
      // 回跳到上一個中點
      // 往右下探一格
      let leftNode = node;
      while (leftNode !== null) {
        stack.push(leftNode);
        leftNode = leftNode.left;
      }
      node = stack.pop()!;
      // 左 > 中(回朔) > 右 右邊一定大
      if (node.val <= lastVal) return false;
      lastVal = node.val;
      node = node.right;
    }
    return true;
  }
  function isValidBST(ROOT: TreeNode | null): boolean {
    if (!ROOT) return true;
    return check(ROOT, -Infinity, Infinity);
    function check(node: TreeNode, min: number, max: number): boolean {
      if (node.val >= max || node.val <= min) return false;
      let isLeftPass = true;
      let isRightPass = true;
      if (node.left) isLeftPass = check(node.left, min, node.val);
      if (node.right) isRightPass = check(node.right, node.val, max);
      return isLeftPass && isRightPass;
    }
  }
  const ipt = arrayToBST([5, 1, 4, null, null, 3, 6]);
  //   isValidBST_中序(ipt);
  isValidBST(ipt);
}
