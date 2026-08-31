import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc0102 {
  function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    let currNodes: (TreeNode | null)[] = [];
    if (root) currNodes.push(root);
    while (currNodes.length > 0) {
      let nextNodes: (TreeNode | null)[] = [];
      const layerAry: number[] = [];
      currNodes.forEach((e) => {
        if (e === null) return;
        layerAry.push(e.val);
        e.left && nextNodes.push(e.left);
        e.right && nextNodes.push(e.right);
      });
      currNodes = nextNodes;
      result.push(layerAry);
    }
    return result;
  }

  const root = arrayToBST([3, 9, 20, null, null, 15, 7]);
  levelOrder(root);
}
