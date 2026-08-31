interface iMinStack {
  min: number;
  val: number;
}
namespace lc0155 {
  class MinStack {
    stack: iMinStack[] = [];
    constructor() {}
    push(val: number): void {
      if (this.stack.length === 0) {
        this.stack.push({ val: val, min: val });
      } else {
        let tempMin = Math.min(this.stack[this.stack.length - 1].min, val);
        this.stack.push({ val: val, min: tempMin });
      }
    }
    pop(): void {
      this.stack.pop();
    }
    top(): number {
      return this.stack[this.stack.length - 1].val;
    }
    getMin(): number {
      return this.stack[this.stack.length - 1].min;
    }
  }
  let obj = new MinStack();
  obj.push(0);
  obj.push(-2);
  obj.push(3);
  obj.pop();
  let y = obj.getMin();
  obj.top();
}
