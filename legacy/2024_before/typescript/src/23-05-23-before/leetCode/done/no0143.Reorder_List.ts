import { arrayToListNode, ListNode } from "../../data-structure/class.ListNode";
namespace lc0143 {
  function reorderList(head: ListNode | null): void {
    if (head === null) return;
    if (head.next === null) return;
    const oldAry: ListNode[] = [];
    const newAry: ListNode[] = [];
    while (head !== null) {
      oldAry.push(head);
      head = head.next;
    }
    const m = Math.floor((oldAry.length - 1) / 2);
    for (let i = 0; i <= m; i++) {
      const ri = oldAry.length - 1 - i;
      newAry.push(oldAry[i]);
      if (ri !== i) newAry.push(oldAry[ri]);
    }
    for (let i = 0; i < newAry.length; i++) {
      if (i === newAry.length - 1) newAry[i].next = null;
      else newAry[i].next = newAry[i + 1];
    }
  }
  const ipt = arrayToListNode([1, 2, 3, 4, 5]);
  reorderList(ipt);
}
