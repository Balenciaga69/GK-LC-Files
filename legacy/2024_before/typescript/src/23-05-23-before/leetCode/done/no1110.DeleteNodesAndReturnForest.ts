import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";
namespace lc1110 {
 const ipt = arrayToBST([1, 2, null, 4, 3]);
 delNodes(ipt, [2, 3]);
 function delNodes(
  root: TreeNode | null,
  to_delete: number[]
 ): Array<TreeNode | null> {
  const S = new Set(to_delete);
  if (!root) return [root];
  let allTree: TreeNode[] = [root];
  run(root);
  allTree = allTree.filter(e => !S.has(e.val));
  return allTree;
  // * * * * *  * * * * *
  function run(node: TreeNode) {
   if (S.has(node.val)) {
    if (node.left) allTree.push(node.left);
    if (node.right) allTree.push(node.right);
   }
   if (node.left) run(node.left);
   if (node.right) run(node.right);
   if (node.left && node.left.val && S.has(node.left.val)) node.left = null;
   if (node.right && node.right.val && S.has(node.right.val)) node.right = null;
  }
 }
}
