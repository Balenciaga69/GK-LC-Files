import { arrayToListNode, ListNode } from "../../data-structure/class.ListNode";
import { TreeNode } from "../../data-structure/class.treeNode";

namespace lc0109 {
 const ipt = [-10, -3, 0, 5, 9];
 //  0~n
 // n+1
 sortedListToBST(arrayToListNode(ipt));
 function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) return null;
  const ary: number[] = [];
  while (head && !isNaN(head.val)) {
   ary.push(head.val);
   head = head.next;
  }
  let root = buildNode(ary);
  return root;
 }
 function buildNode(ary: number[]): TreeNode {
  const node = new TreeNode();
  const m = Math.floor(ary.length / 2);
  const left = ary.slice(0, m);
  const right = ary.slice(m + 1);
  node.val = ary[m];
  if (left.length) node.left = buildNode(left);
  if (right.length) node.right = buildNode(right);
  return node;
 }
}
