import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";
namespace lc1305 {
 const root1 = arrayToBST([2, 1, 4]),
  root2 = arrayToBST([1, 0, 3]);
 getAllElements(root1, root2);
 function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null
 ): number[] {
  const n1: number[] = [];
  const n2: number[] = [];
  const ans: number[] = [];
  root1 && fun(root1, n1);
  root2 && fun(root2, n2);
  while (n1.length || n2.length) {
   if (!n1.length) ans.push(n2.shift()!);
   else if (!n2.length) ans.push(n1.shift()!);
   else {
    if (n1[0] > n2[0]) ans.push(n2.shift()!);
    else ans.push(n1.shift()!);
   }
  }
  return ans;
  function fun(node: TreeNode, out: number[]) {
   if (node.left) fun(node.left, out);
   out.push(node.val);
   if (node.right) fun(node.right, out);
  }
 }
}
