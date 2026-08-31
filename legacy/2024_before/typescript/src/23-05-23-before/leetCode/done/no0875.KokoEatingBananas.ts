namespace lc0875 {
  function minEatingSpeed(piles: number[], h: number): number {
    let min = 1;
    let max = maxPiles(piles);
    while (min < max) {
      const currUnit = Math.floor((max + min) / 2);
      const currHours = sumHours(piles, currUnit);
      if (currHours <= h) max = currUnit;
      else min = currUnit + 1;
    }
    return max;
  }
  function sumHours(piles: number[], eatUnit: number) {
    return piles.reduce((prev, curr) => prev + Math.ceil(curr / eatUnit), 0);
  }
  function maxPiles(piles: number[]) {
    return piles.reduce((prev, curr) => (prev = Math.max(prev, curr)));
  }

  const piles = [3, 6, 7, 11],
    h = 8;
  const piles2 = [30, 11, 23, 4, 20],
    h2 = 6;
  minEatingSpeed(piles2, h2);
}
// [30,11,23,4,20]
// [3, 6, 7, 11]
/**
 * 1~11
 * 11+3-1/3
 */
