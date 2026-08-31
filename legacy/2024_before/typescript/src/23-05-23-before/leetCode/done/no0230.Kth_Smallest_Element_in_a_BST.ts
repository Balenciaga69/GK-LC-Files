import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";
namespace lc0230 {
  function kthSmallest(root: TreeNode | null, k: number): number {
    const stack: TreeNode[] = [];
    let node = root;
    let kTH = 0;
    while (node || stack.length) {
      while (node) {
        stack.push(node);
        node = node.left;
      }
      if (++kTH === k) break;
      node = stack.pop()!.right;
    }
    return stack.pop()!.val;
  }
  const ipt = arrayToBST([5, 3, 6, 2, 4, null, null, 1]);
  console.log(`正在測試...`, kthSmallest(ipt, 4));
}
