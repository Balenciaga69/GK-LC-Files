namespace lc0167 {
  function twoSum(numbers: number[], target: number): number[] {
    let l = 0;
    let r = numbers.length - 1;
    while (l < r) {
      const curr = numbers[l] + numbers[r];
      if (curr === target) return [l + 1, r + 1];
      if (curr > target) r--;
      if (curr < target) l++;
    }
    return [-1, -1];
  }
  const numbers = [5, 25, 75],
    target = 100;
  twoSum(numbers, target);
}
