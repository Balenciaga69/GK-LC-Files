import { TreeNode } from "../../data-structure/class.treeNode";

namespace lc0107 {
 function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  let Q: TreeNode[] = [root];
  let nextQ: TreeNode[] = [];
  let tempAry: number[] = [];
  while (Q.length) {
   const node = Q.shift()!;
   tempAry.push(node.val);
   if (node.left) nextQ.push(node.left);
   if (node.right) nextQ.push(node.right);
   if (!Q.length) {
    Q = nextQ.splice(0);
    result.push(tempAry.splice(0));
   }
  }
  return result.reverse();
 }
}
