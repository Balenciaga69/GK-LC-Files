namespace lc2475Stupid {
  function unequalTriplets(a: number[]): number {
    const step1Map = new Map<number, number>();
    let total = 0;
    a.forEach((e) => {
      let t = step1Map.get(e);
      step1Map.set(e, t ? t + 1 : 1);
    });
    const step2Ary: number[] = [];
    step1Map.forEach((e) => step2Ary.push(e));
    const len = step2Ary.length;
    for (let i = 0; i < len - 2; i++) {
      for (let j = i + 1; j < len - 1; j++) {
        for (let k = j + 1; k < len; k++) {
          total += step2Ary[i] * step2Ary[j] * step2Ary[k];
        }
      }
    }
    return total;
  }
  const nums = [1, 1, 2, 2, 3, 3, 4, 4];
  unequalTriplets(nums);
}
namespace lc2475Smart {
  function unequalTriplets(a: number[]): number {
    let total = 0;
    let before = 0;
    let after = a.length;
    let freq = new Array(1001).fill(0);
    a.forEach((e) => freq[e]++);
    freq.forEach((now) => {
      after -= now;
      total += before * now * after;
      before += now;
    });
    return total;
  }
  const nums = [1, 1, 2, 2, 3, 3, 4, 4];
  unequalTriplets(nums);
}
