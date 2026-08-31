export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
export function arrayToBST(ary: (number | null)[]) {
  const root = new TreeNode();
  addNode(root, 0);
  function addNode(curr: TreeNode | null, i: number) {
    if (ary[i] === null) {
      curr = null;
      return;
    }
    curr!.val = ary[i]!;
    const leftIdx = i * 2 + 1;
    const rightIdx = i * 2 + 2;
    if (leftIdx < ary.length && ary[leftIdx] !== null) {
      curr!.left = new TreeNode();
      addNode(curr!.left, leftIdx);
    }
    if (rightIdx < ary.length && ary[rightIdx] !== null) {
      curr!.right = new TreeNode();
      addNode(curr!.right, rightIdx);
    }
  }
  return root;
}
export function getNodeFormBST(root: TreeNode, idx: number) {
  let result: TreeNode | null = null;
  run(root);
  return result;
  function run(node: TreeNode | null) {
    if (!node) return;
    if (node.val === idx) {
      result = node;
      return;
    }
    if (node.val > idx && node.left) run(node.left);
    if (node.val < idx && node.right) run(node.right);
  }
}
