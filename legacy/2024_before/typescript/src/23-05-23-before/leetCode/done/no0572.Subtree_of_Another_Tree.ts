import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc0572 {
  function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root === null) return subRoot ? false : true;
    if (isSame(root, subRoot)) return true;
    if (isSubtree(root.left, subRoot)) return true;
    if (isSubtree(root.right, subRoot)) return true;
    return false;
    function isSame(main: TreeNode | null, sub: TreeNode | null): boolean {
      // 到底端 兩方都是null
      if (main === null && sub === null) return true;
      // 其中一方是null
      if (main === null || sub === null) return false;
      // 兩方都是node 但不相等
      if (main.val !== sub.val) return false;
      // 同步向下查找
      return isSame(main.left, sub.left) && isSame(main.right, sub.right);
    }
  }
  const ary1 = [
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    null,
    1,
    2,
  ];
  const ary2 = [1, null, 1, null, 1, null, 1, null, 1, null, 1, 2];
  const x = isSubtree(arrayToBST(ary1), arrayToBST(ary2));
  console.log(`正在測試...`, x);
}
