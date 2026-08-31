namespace lc0705 {
  class MyHashSet {
    private BASE = 701;
    private data = new Array(this.BASE).fill(0).map(() => new Array<number>());
    constructor() {}
    add(key: number): void {
      const h = this.hash(key);
      let findIt = this.data[h].find((e) => e === key);
      if (findIt) return;
      this.data[h].push(key);
    }
    remove(key: number): void {
      const h = this.hash(key);
      const idx = this.data[h].findIndex((e) => e === key);
      if (idx > -1) this.data[h].splice(idx, 1);
    }
    contains(key: number): boolean {
      const h = this.hash(key);
      let idx = this.data[h].findIndex((e) => e === key);
      return idx > -1;
    }
    private hash(key: number) {
      return key % this.BASE;
    }
  }
  let hash = new MyHashSet();
  hash.add(0);
  hash.add(701);
  hash.remove(0);
  hash.remove(701);
  hash.add(14);
  hash.contains(14);
}
