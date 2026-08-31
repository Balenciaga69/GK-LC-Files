import { minPQ } from "../../data-structure/class.priority-queue";
namespace lc0703 {
  class KthLargest {
    private minPQ = new minPQ();
    // * * * * *  * * * * *
    constructor(private k: number, private nums: number[]) {
      nums.forEach((e) => this.minPQ.enQueue(e, e));
      this.deQueueUntilK();
    }
    add(val: number): number {
      this.minPQ.enQueue(val, val);
      this.deQueueUntilK();
      const target = this.minPQ.peek();
      return target !== null ? target.priority : -1;
    }
    private deQueueUntilK(): void {
      while (this.minPQ.getLength() > this.k) {
        this.minPQ.deQueue();
      }
    }
  }
  let o = new KthLargest(1, []);
  console.log(`18...`, o.add(-3));
  console.log(`18...`, o.add(-2));
  console.log(`18...`, o.add(-4));
  console.log(`18...`, o.add(0));
  console.log(`18...`, o.add(4));
}
