import { arrayToBST, TreeNode } from "../../data-structure/class.treeNode";

namespace lc0297 {
  function serialize(root: TreeNode | null): string {
    if (!root) return "";
    let str = root.val + ",";
    const queue: Array<TreeNode | null> = [root];
    while (queue.length) {
      let node = queue.shift()!;
      if (!node.left && !node.right && !queue.length) continue;
      if (!node.left) str += "null,";
      else {
        str += node.left.val + ",";
        queue.push(node.left);
      }
      if (!node.right) str += "null,";
      else {
        str += node.right.val + ",";
        queue.push(node.right);
      }
    }
    // * * * * *  * * * * *
    return str.substring(0, str.length - 1);
  }
  function deserialize(data: string): TreeNode | null {
    if (!data) return null;
    const list: string[] = data.split(",");
    const n = list.length;
    const root = new TreeNode();
    const nodeList: TreeNode[] = [root];
    let refPoint = 0; // 參照點
    for (let i = 0; i < n; i++) {
      if (list[i] === "null") continue;
      const node = nodeList.shift()!;
      node.val = Number(list[i]);
      refPoint++;
      if (refPoint < n && list[refPoint] !== "null") {
        node.left = new TreeNode();
        nodeList.push(node.left);
      }
      refPoint++;
      if (refPoint < n && list[refPoint] !== "null") {
        node.right = new TreeNode();
        nodeList.push(node.right);
      }
    }
    return root;
  }
  let ipt = "";
  serialize(deserialize(ipt));
}
