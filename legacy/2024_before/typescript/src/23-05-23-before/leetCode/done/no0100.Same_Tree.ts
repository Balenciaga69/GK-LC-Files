import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc0100 {
  function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null) return false;
    if (q === null) return false;
    // * * * * *  * * * * *
    const queue1: (TreeNode | null)[] = [];
    const queue2: (TreeNode | null)[] = [];
    // * * * * *  * * * * *
    queue1.push(p);
    queue2.push(q);
    while (queue1.length > 0 && queue2.length > 0) {
      let item1 = queue1.shift()!;
      let item2 = queue2.shift()!;
      if (!!item1 != !!item2) return false;
      if (item1.val !== item2.val) return false;
      if (item1.left || item2.left) {
        queue1.push(item1.left);
        queue2.push(item2.left);
      }
      if (item1.right || item2.right) {
        queue1.push(item1.right);
        queue2.push(item2.right);
      }
    }
    return true;
  }
  const base = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const a1 = arrayToBST([1, 2]);
  const a2 = arrayToBST([1, null, 2]);
  isSameTree(a1, a2);
}
