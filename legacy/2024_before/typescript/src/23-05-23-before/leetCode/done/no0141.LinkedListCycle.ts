import { ListNode } from "../../data-structure/class.ListNode";

namespace lc0141 {
  function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) return false;
    let turtle: ListNode | null = head;
    let rabbit: ListNode | null = head.next;
    while (rabbit !== turtle) {
      if (rabbit === null || rabbit.next === null) return false;
      turtle = turtle?.next || null;
      rabbit = rabbit.next?.next || null;
    }
    return true;
  }
}

[
  -21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20, 14,
  14, 2, 13, -24, 21, 23, -21, 5,
];
