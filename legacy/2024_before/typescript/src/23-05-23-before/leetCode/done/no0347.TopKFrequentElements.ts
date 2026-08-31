namespace lc0347 {
  function topKFrequent(nums: number[], k: number): number[] {
    // * * * * *  * * * * *
    const map = new Map<number, number>();
    nums.forEach((n) => {
      const times = map.get(n);
      map.set(n, times ? times + 1 : 1);
    });
    // * * * * *  * * * * *
    const pq = new maxPQ();
    map.forEach((times, val) => pq.push({ val, times }));
    // * * * * *  * * * * *
    const result: number[] = [];
    for (let i = 1; i <= k; i++) {
      result.push(pq.shift()!.val);
    }
    // * * * * *  * * * * *
    return result;
  }
  interface iNode {
    val: number;
    times: number;
  }
  class maxPQ {
    private nodes: iNode[] = [];
    push(node: iNode) {
      this.nodes.push(node);
      let cIdx = this.nodes.length - 1;
      let pIdx = Math.floor((cIdx - 1) / 2);
      while (pIdx > -1) {
        const getTime = (j: number) => this.nodes[j].times;
        if (getTime(pIdx) < getTime(cIdx)) {
          this.swapNode(pIdx, cIdx);
          cIdx = pIdx;
          pIdx = Math.floor((cIdx - 1) / 2);
        } else break;
      }
    }
    shift() {
      if (this.nodes.length === 0) return null;
      if (this.nodes.length === 1) return this.nodes.shift()!;
      this.swapNode(0, this.nodes.length - 1);
      const out = this.nodes.pop()!;
      this.maxHeap(0);
      return out;
    }
    peek() {
      return this.nodes[0].val;
    }
    private maxHeap(i: number) {
      const getTime = (j: number) => this.nodes[j].times;
      let m = i;
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      const len = this.nodes.length;
      if (l < len && getTime(l) > getTime(m)) m = l;
      if (r < len && getTime(r) > getTime(m)) m = r;
      if (m !== i) {
        this.swapNode(m, i);
        this.maxHeap(m);
      }
    }
    private swapNode(i: number, j: number) {
      [this.nodes[i], this.nodes[j]] = [this.nodes[j], this.nodes[i]];
    }
  }
  let o = new maxPQ();
  o.push({ val: 1, times: 1 });
  o.push({ val: 4, times: 4 });
  o.push({ val: 3, times: 3 });
  o.push({ val: 2, times: 2 });
  o.shift();
  console.log(`正在測試...`);
}
