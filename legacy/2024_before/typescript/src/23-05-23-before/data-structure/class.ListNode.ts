export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
arrayToListNode([1, 2, 2]);
export function arrayToListNode(ary: number[]) {
  const root: ListNode = new ListNode();
  let curr = root;
  for (let i = 0; i < ary.length; i++) {
    curr.val = ary[i];
    if (i < ary.length - 1) {
      curr.next = new ListNode();
      curr = curr.next;
    }
  }
  return root;
}
