import { TreeNode } from "../../data-structure/class.treeNode";
namespace lc0105DIY {
  const map = new Map<number, number>();
  function buildTree(preOrder: number[], inOrder: number[]): TreeNode | null {
    const lenEdge = preOrder.length - 1;
    inOrder.forEach((e, i) => map.set(e, i));
    return create(0, lenEdge, 0, lenEdge);
    // * * * * *  * * * * *
    function create(
      pStart: number,
      pEnd: number,
      iStart: number,
      iEnd: number
    ) {
      const iRootIdx = map.get(preOrder[pStart])!;
      const leftLen = iRootIdx - iStart;
      const rightLen = iEnd - iRootIdx;
      // * * * * *  * * * * *
      const node = new TreeNode();
      node.val = inOrder[iRootIdx];
      // * * * * *  * * * * *
      if (leftLen)
        node.left = create(pStart + 1, pStart + leftLen, iStart, iRootIdx - 1);
      if (rightLen)
        node.right = create(pStart + leftLen + 1, pEnd, iRootIdx + 1, iEnd);
      // * * * * *  * * * * *
      return node;
    }
  }
  const x_preOrder = [3, 9, 8, 4, 5, 7];
  const x_inorder = [8, 9, 3, 5, 4, 7];
  const x = buildTree(x_preOrder, x_inorder);
  console.log(`正在測試...`, x);
}
