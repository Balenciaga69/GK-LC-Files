import {
  arrayToBST,
  getNodeFormBST,
  TreeNode,
} from "../../data-structure/class.treeNode";

namespace lc0235 {
  function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
  ): TreeNode | null {
    // 從 root 往下找
    // 尋找某個分道揚鑣的點
    let keepGoing = true;
    let curr = root;
    while (keepGoing) {
      if (curr === null) break;
      if (p!.val > curr.val && q!.val > curr.val) curr = curr.right;
      else if (p!.val < curr.val && q!.val < curr.val) curr = curr.left;
      else break;
    }
    return curr;
  }
  const root = arrayToBST([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
  const n2 = getNodeFormBST(root, 3);
  const n8 = getNodeFormBST(root, 5);
  lowestCommonAncestor(root, n2, n8);
}
