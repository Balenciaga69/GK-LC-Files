namespace lc0398 {
  class Solution {
    private myMap = new Map<number, number[]>();
    constructor(nums: number[]) {
      nums.forEach((e, i) => {
        const temp = this.myMap.get(e);
        this.myMap.set(e, temp ? [...temp, i] : [i]);
      });
    }
    pick(target: number): number {
      const ary = this.myMap.get(target)!;
      const rand = Math.floor(Math.random() * ary.length);
      return ary[rand];
    }
  }
}
