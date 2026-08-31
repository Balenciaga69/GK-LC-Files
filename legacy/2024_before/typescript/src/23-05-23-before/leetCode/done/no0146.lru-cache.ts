namespace lc0146 {
 class LRUCache {
  m = new Map<number, number>();
  a: number[] = [];
  private capacity = 0;
  constructor(capacity: number) {
   this.capacity = capacity;
  }
  get(key: number): number {
   if (this.m.has(key)) {
    this.updateHead(key);
    return this.m.get(key)!;
   } else return -1;
  }
  put(key: number, value: number): void {
   if (this.m.has(key)) {
    this.m.set(key, value);
    this.updateHead(key);
   } else {
    if (this.a.length >= this.capacity) this.m.delete(this.a.shift()!);
    this.m.set(key, value);
    this.a.push(key);
   }
  }
  private updateHead(key: number) {
   const id = this.a.findIndex(k => k === key);
   this.a.push(...this.a.splice(id, 1));
  }
 }
 let o = new LRUCache(2);
 o.put(1, 1);
 o.put(2, 2);
 o.get(1);
 o.put(3, 3);
 o.get(2);
 o.put(4, 4);
 o.get(1);
 o.get(3);
 o.get(4);
}
