namespace lc0206 {
  function reverseList(head: ListNode | null): ListNode | null {
    let curr = new ListNode();
    if (!head) return null;
    do {
      curr.val = head!.val;
      head = head!.next;
      let temp = new ListNode();
      temp.next = curr;
      curr = temp;
    } while (head);
    return curr.next;
  }
  const head = [0, 1];
  console.log(`正在測試...`, reverseList(aryToList([1])));
  // * * * * * rule * * * * *
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  function aryToList(ary: number[]) {
    const head = new ListNode();
    let curr = head;
    for (let i = 0; i < ary.length; i++) {
      curr.val = ary[i];
      if (i < ary.length - 1) {
        curr.next = new ListNode();
        curr = curr.next;
      }
    }
    return head;
  }
}
