import { maxPQ } from "../../data-structure/class.priority-queue";
namespace lc0239單調佇列 {
  function maxSlidingWindow(nums: number[], k: number): number[] {
    const res: number[] = [];
    // * * * * *  * * * * *
    let q: number[] = [];
    const topVal = () => nums[q[q.length - 1]];
    // * * * * *  * * * * *
    nums.slice(0, k).forEach((num, i) => {
      while (q.length != 0 && num > topVal()) q.pop();
      q.push(i);
    });
    res.push(nums[q[0]]);
    // * * * * *  * * * * *
    for (let i = k; i < nums.length; i++) {
      while (q.length !== 0 && nums[i] > topVal()) q.pop();
      q.push(i);
      while (q[0] <= i - k) q.shift();
      res.push(nums[q[0]]);
    }
    // * * * * *  * * * * *
    return res;
  }
  //   const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  const nums = [9, 8, 7, 6, 5, 4],
    k = 3;
  //   maxSlidingWindow(nums, k);
}
namespace lc0239優先佇列 {
  function maxSlidingWindow(nums: number[], k: number): number[] {
    const res: number[] = [];
    // * * * * *  * * * * *
    let MPQ = new maxPQ();
    nums.slice(0, k).forEach((e, i) => MPQ.enQueue(i, e));
    res.push(MPQ.peek()!.priority);
    for (let i = k; i < nums.length; i++) {
      MPQ.enQueue(i, nums[i]);
      while (MPQ.peek()!.val <= i - k) MPQ.deQueue();
      res.push(MPQ.peek()!.priority);
    }
    // * * * * *  * * * * *
    return res;
  }
  const nums = [9, 8, 7, 6, 5, 4],
    k = 3;
  maxSlidingWindow(nums, k);
}
