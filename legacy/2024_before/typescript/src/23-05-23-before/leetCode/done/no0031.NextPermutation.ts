namespace lc0031 {
  function nextPermutation(nums: number[]): void {
    let k = getK();
    if (k === -1) reverse(0);
    else {
      let l = getL(k);
      swap(k, l);
      reverse(k + 1);
    }
    // * * * * *  * * * * *
    function getK() {
      let k = nums.length - 1 - 1;
      while (k > -1) {
        if (nums[k] < nums[k + 1]) return k;
        k--;
      }
      return k;
    }
    function getL(k: number) {
      let l = nums.length - 1;
      while (l > -1) {
        if (nums[l] > nums[k]) return l;
        l--;
      }
      return l;
    }
    function reverse(i: number) {
      let j = nums.length - 1;
      while (i < j) {
        swap(i, j);
        i++;
        j--;
      }
    }
    function swap(a: number, b: number) {
      [nums[a], nums[b]] = [nums[b], nums[a]];
    }
  }
  nextPermutation([1, 2, 3]);
}
