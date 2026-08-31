namespace lc0268Simple {
  function missingNumber(nums: number[]): number {
    const ary: number[] = [];
    nums.forEach((e) => {
      ary[e] = 1;
    });
    for (let i = 0; i <= ary.length; i++) {
      if (!ary[i]) return i;
    }
    return -1;
  }
}
namespace lc0268Bit {
  console.log(8 >>> 1);
}
