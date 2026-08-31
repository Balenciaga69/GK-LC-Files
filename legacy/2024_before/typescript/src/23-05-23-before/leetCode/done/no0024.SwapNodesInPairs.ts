import { arrayToListNode, ListNode } from "../../data-structure/class.ListNode";
namespace lc0024 {
  function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let nextHead = head.next;
    head.next = swapPairs(nextHead.next);
    nextHead.next = head;
    return nextHead;
  }
  const ipt = arrayToListNode([1, 2, 3, 4]);
  let u = swapPairs(ipt);
}
