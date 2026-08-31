import { minPQ } from "../../data-structure/class.priority-queue";
namespace lc0215minPriorityQueue {
  // 該作法 比較慢。
  function findKthLargest(nums: number[], k: number): number {
    const PQ = new minPQ();
    // * * * * *  * * * * *
    nums.forEach((val) => PQ.enQueue(val, val));
    while (PQ.getLength() > k) PQ.deQueue();
    return PQ.peek()!.priority;
    // * * * * *  * * * * *
  }
  const ipt = [3, 2, 1, 5, 6, 4],
    k = 2;
  //   findKthLargest(ipt, k);
}

namespace lc0215quickSelect {
  function findKthLargest(nums: number[], k: number): number {
    return quickSelect(0, nums.length - 1, nums.length - k);
    // * * * * *  * * * * *
    function quickSelect(l: number, r: number, idx: number): number {
      let pivot = sortAndGetPivot(l, r);
      if (pivot === idx) return nums[pivot];
      if (pivot > idx) return quickSelect(l, pivot - 1, idx);
      if (pivot < idx) return quickSelect(pivot + 1, r, idx);
      return -1;
    }
    function sortAndGetPivot(l: number, r: number) {
      const randIdx = Math.floor(Math.random() * (r - l + 1) + l);
      swap(randIdx, r);
      let i = l - 1;
      for (let j = l; j < r; j++) {
        if (nums[j] <= nums[r]) swap(++i, j);
      }
      swap(i + 1, r);
      return i + 1;
    }
    function swap(a: number, b: number) {
      [nums[a], nums[b]] = [nums[b], nums[a]];
    }
  }
  const ipt = [3, 2, 1, 5, 6, 4],
    k = 2;
  findKthLargest(ipt, k);
}
