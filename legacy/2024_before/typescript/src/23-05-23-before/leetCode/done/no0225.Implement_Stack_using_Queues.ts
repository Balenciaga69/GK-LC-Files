namespace lc0225 {
  class MyStack {
    private Q: number[] = [];
    constructor() {}
    push(x: number): void {
      this.Q.push(x);
    }
    pop(): number {
      if (this.Q.length === 0) return -1;
      if (this.Q.length === 1) return this.Q.shift()!;
      let temp: number[] = [];
      let out = -1;
      while (this.Q.length > 1) {
        temp.push(this.Q.shift()!);
      }
      out = this.Q.shift()!;
      while (temp.length > 0) {
        this.Q.push(temp.shift()!);
      }
      return out;
    }
    top(): number {
      return this.Q[this.Q.length - 1];
    }
    empty(): boolean {
      return this.Q.length < 1;
    }
  }
  let iii = new MyStack();
  iii.push(1);
  iii.push(2);
  iii.push(3);
  iii.pop();
  iii.pop();
  iii.pop();
  iii.push(2);
}
