import { arrayToListNode, ListNode } from "../../data-structure/class.ListNode";

namespace lc0019 {
  function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) return null;
    let length = getLength();
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    // 移除 first node
    if (n - length === 0) return head.next;
    // search prev node from reverseList
    while (n - length < 0) {
      prev = curr;
      length--;
      curr = curr?.next || null;
    }
    // remove node from reverseList
    if (prev) {
      prev.next = prev.next?.next || null;
      return head;
    }
    return null;
    // * * * * *  * * * * *
    function getLength() {
      let length = 0;
      let a_head = head;
      while (a_head !== null) {
        length++;
        a_head = a_head?.next;
      }
      return length;
    }
  }
  const head = [1, 2];
  const n = 1;
  const ipt = arrayToListNode(head);
  const result = removeNthFromEnd(ipt, n);
  console.log(`正在測試...`, result);
}
