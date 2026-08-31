namespace lc0706 {
  class MyHashMap {
    private BASE = 701;
    private data = new Array(this.BASE)
      .fill(0)
      .map(() => new Array<[number, number]>());
    constructor() {}
    put(key: number, value: number): void {
      const h = this.getHash(key);
      const target = this.data[h].find((e) => e[0] === key);
      if (target) {
        target[1] = value;
      } else {
        this.data[h].push([key, value]);
      }
    }
    get(key: number): number {
      const h = this.getHash(key);
      const target = this.data[h].find((e) => e[0] === key);
      if (target) {
        return target[1];
      } else {
        return -1;
      }
    }
    remove(key: number): void {
      const h = this.getHash(key);
      const idx = this.data[h].findIndex((e) => e[0] === key);
      if (idx > -1) this.data[h].splice(idx, 1);
    }
    private getHash(key: number) {
      return key % this.BASE;
    }
  }

  /**
   * Your MyHashMap object will be instantiated and called as such:
   * var obj = new MyHashMap()
   * obj.put(key,value)
   * var param_2 = obj.get(key)
   * obj.remove(key)
   */
}
