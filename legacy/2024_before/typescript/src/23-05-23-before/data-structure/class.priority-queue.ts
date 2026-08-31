export interface iPriorityNode {
  val: number;
  priority: number;
}
export class minPQ {
  private nodes: iPriorityNode[] = [];
  constructor() {}
  public enQueue(val: number, priority: number) {
    const newNode: iPriorityNode = { val, priority };
    this.nodes.push(newNode);
    // * * * * * compare priority * * * * *
    let childIdx = this.nodes.length - 1;
    let getParentIdx = () => Math.floor((childIdx - 1) / 2);
    while (true) {
      if (getParentIdx() < 0) break; // 父輩已超過祖譜根部
      let parent = this.nodes[getParentIdx()];
      let child = this.nodes[childIdx];
      if (parent.priority < child.priority) break; // 小孩優先權高於父親 ， 便無須執行以下排序 ，越頂端 優先權越小
      // * * * * * swap * * * * *
      this.swapNode(getParentIdx(), childIdx);
      childIdx = getParentIdx();
      // * * * * *  * * * * *
    }
  }
  public deQueue(): iPriorityNode | null {
    if (this.nodes.length === 0) return null;
    if (this.nodes.length === 1) return this.nodes.pop()!;
    // * * * * * 頭尾調換 並拉出原本頭部的值 * * * * *
    this.swapNode(0, this.nodes.length - 1);
    let out = this.nodes.pop()!;
    // * * * * * 重新整理排序 * * * * *
    this.minHeapify(0);
    // * * * * *  * * * * *
    return out;
  }
  public peek(): iPriorityNode | null {
    if (this.nodes.length === 0) return null;
    return this.nodes[0];
  }
  public getLength(): number {
    return this.nodes.length;
  }
  private minHeapify(i: number) {
    const getP = (idx: number) => this.nodes[idx].priority;
    let minIdx = i;
    const idxAry: number[] = [];
    const l = i * 2 + 1;
    const r = i * 2 + 2;
    if (l < this.nodes.length) idxAry.push(l);
    if (r < this.nodes.length) idxAry.push(r);
    idxAry.forEach((idx) => {
      if (getP(idx) < getP(minIdx)) minIdx = idx;
    });
    if (minIdx === i) return;
    this.swapNode(minIdx, i);
    this.minHeapify(minIdx);
  }
  private swapNode(a: number, b: number) {
    [this.nodes[a], this.nodes[b]] = [this.nodes[b], this.nodes[a]];
  }
}
export class maxPQ {
  private nodes: iPriorityNode[] = [];
  constructor() {}
  public enQueue(val: number, priority: number) {
    const newNode: iPriorityNode = { val, priority };
    this.nodes.push(newNode);
    // * * * * * compare priority * * * * *
    let childIdx = this.nodes.length - 1;
    let getParentIdx = () => Math.floor((childIdx - 1) / 2);
    while (true) {
      if (getParentIdx() < 0) break; // 父輩已超過祖譜根部
      let parent = this.nodes[getParentIdx()];
      let child = this.nodes[childIdx];
      if (parent.priority > child.priority) break;
      // * * * * * swap * * * * *
      this.swapNode(getParentIdx(), childIdx);
      childIdx = getParentIdx();
      // * * * * *  * * * * *
    }
  }
  public deQueue(): iPriorityNode | null {
    if (this.nodes.length === 0) return null;
    if (this.nodes.length === 1) return this.nodes.pop()!;
    // * * * * * 頭尾調換 並拉出原本頭部的值 * * * * *
    this.swapNode(0, this.nodes.length - 1);
    let out = this.nodes.pop()!;
    // * * * * * 重新整理排序 * * * * *
    this.maxHeapify(0);
    // * * * * *  * * * * *
    return out;
  }
  public peek(): iPriorityNode | null {
    if (this.nodes.length === 0) return null;
    return this.nodes[0];
  }
  public getLength(): number {
    return this.nodes.length;
  }
  private maxHeapify(i: number) {
    const getP = (idx: number) => this.nodes[idx].priority;
    let maxIdx = i;
    const idxAry: number[] = [];
    const l = i * 2 + 1;
    const r = i * 2 + 2;
    if (l < this.nodes.length) idxAry.push(l);
    if (r < this.nodes.length) idxAry.push(r);
    idxAry.forEach((idx) => {
      if (getP(idx) > getP(maxIdx)) maxIdx = idx;
    });
    if (maxIdx === i) return;
    this.swapNode(maxIdx, i);
    this.maxHeapify(maxIdx);
  }
  private swapNode(a: number, b: number) {
    [this.nodes[a], this.nodes[b]] = [this.nodes[b], this.nodes[a]];
  }
}
