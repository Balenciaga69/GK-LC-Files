import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc0623 {
 let root = [4, 2, 6, 3, 1, 5],
  val = 1,
  depth = 1;
 addOneRow(arrayToBST(root), val, depth);
 type TN = TreeNode | null;
 function addOneRow(root: TN, val: number, depth: number): TN {
  if (!root) return { ...new TreeNode(), val };
  let Q: TreeNode[] = [root];
  let nextQ: TreeNode[] = [];
  let currLevel = 1;
  // * * * * *  * * * * *
  if (depth === 1) {
   return { ...new TreeNode(), val, left: root };
  }
  // * * * * *  * * * * *
  while (Q.length) {
   const node = Q.pop()!;
   if (currLevel === depth - 1) {
    const l_node = { ...new TreeNode(), val, left: node.left };
    const r_node = { ...new TreeNode(), val, right: node.right };
    node.left = l_node;
    node.right = r_node;
    // * * * * *  * * * * *
   } else {
    node.left && nextQ.push(node.left);
    node.right && nextQ.push(node.right);
   }
   // * * * * *  * * * * *
   if (!Q.length) {
    Q = nextQ;
    nextQ = [];
    currLevel++;
   }
  }
  return root;
 }
}
/**
 * root => root 變成 left
 *
 */
