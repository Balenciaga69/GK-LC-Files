import { arrayToListNode, ListNode } from "../../data-structure/class.ListNode";
type tNode = ListNode | null;
namespace lc0023簡易 {
  function mergeKLists(lists: Array<tNode>): tNode {
    const root = getMinVal();
    let curr = root;
    while (true) {
      if (curr === null) break;
      curr.next = getMinVal();
      curr = curr.next;
    }
    return root;
    function getMinVal() {
      let m = -1;
      for (let i = 0; i < lists.length; i++) {
        if (lists[i] === null) continue;
        if (m === -1) m = i;
        else if (lists[i]!.val < lists[m]!.val) m = i;
      }
      if (!lists[m]) return null;
      const result: tNode = lists[m];
      lists[m] = lists[m]!.next || null;
      return result;
    }
  }
}

let ipt1 = arrayToListNode([1, 4, 5]);
let ipt2 = arrayToListNode([1, 3, 4]);
let ipt3 = arrayToListNode([2, 6]);
let abc = [ipt1, ipt2, ipt3];
