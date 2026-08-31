import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";
type T = TreeNode | null;
namespace lc2471 {
  function minimumOperations(root: T): number {
    let swapTimes = 0;
    let curr: T[] = [root]; // current layer
    let next: T[] = []; // next layer
    curr = curr.filter((e) => e);
    while (curr.length > 0) {
      // 開始打亂 做選擇排序
      for (let i = 0; i < curr.length; i++) {
        let min = i; // min idx
        for (let j = i + 1; j < curr.length; j++) {
          if (curr[min]!.val > curr[j]!.val) min = j;
        }
        if (min !== i) {
          swapTimes++;
          let temp = curr[min]!.val;
          curr[min]!.val = curr[i]!.val;
          curr[i]!.val = temp;
        }
      }
      // 讀取下一層的node.
      curr.forEach((e) => {
        if (!e) return;
        next.push(e.left);
        next.push(e.right);
      });
      curr = next.filter((e) => e);
      next = [];
    }
    return swapTimes;
  }
  const ipt = arrayToBST([
    1,
    4,
    3,
    7,
    6,
    8,
    5,
    null,
    null,
    null,
    null,
    9,
    null,
    10,
  ]);
  console.log(`正在測試...`, minimumOperations(ipt));
}
