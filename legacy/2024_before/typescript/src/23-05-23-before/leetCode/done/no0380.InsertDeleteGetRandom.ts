namespace lc0380 {
  class RandomizedSet {
    private mySet = new Set<number>();
    constructor() {}
    insert(val: number): boolean {
      if (this.mySet.has(val)) return false;
      else {
        this.mySet.add(val);
        return true;
      }
    }
    remove(val: number): boolean {
      if (this.mySet.has(val)) {
        this.mySet.delete(val);
        return true;
      } else return false;
    }
    getRandom(): number {
      const rand = Math.floor(Math.random() * this.mySet.size);
      let count = 0;
      let result = 0;
      this.mySet.forEach((val) => {
        if (count === rand) result = val;
        count++;
      });
      return result;
    }
  }
}
