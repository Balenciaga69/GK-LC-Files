namespace lc0232 {
  class MyQueue {
    private stack: number[] = [];
    constructor() {}
    push(x: number): void {
      this.stack.push(x);
    }
    pop(): number {
      let n = () => this.stack.length;
      if (n() === 0) return -1;
      if (n() === 1) return this.stack.pop()!;
      let out = -1;
      let temp: number[] = [];
      while (n() > 1) {
        temp.push(this.stack.pop()!);
      }
      out = this.stack.pop()!;
      while (temp.length > 0) {
        this.stack.push(temp.pop()!);
      }
      return out;
    }
    peek(): number {
      return this.stack[0];
    }
    empty(): boolean {
      return this.stack.length === 0;
    }
  }
  let o = new MyQueue();
  o.push(1);
  o.pop();
  o.empty();
  o.empty();
}
