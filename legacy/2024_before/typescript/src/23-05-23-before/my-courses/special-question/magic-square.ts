namespace MagicSquare {
  function magicSquare(n: number) {
    // * * * * *  * * * * *
    const ary = JSON.parse(
      JSON.stringify(Array(n).fill(Array(n).fill(0)))
    ) as number[][];
    // * * * * *  * * * * *
    const mid = (n / 2) | 0;
    // * * * * *  * * * * *
    go(ary, 0, mid, 1);
    // * * * * *  * * * * *
    return ary;
  }
  function go(ary: number[][], x: number, y: number, step: number) {
    if (step > ary.length * ary.length) return;
    if (ary[x][y] === 0) {
      ary[x][y] = step;
      step++;
    }
    if (ary[fix(x - 1)][fix(y - 1)] === 0) {
      go(ary, fix(x - 1), fix(y - 1), step);
    } else {
      go(ary, fix(x + 1), fix(y), step);
    }
    function fix(num: number) {
      if (num === -1) return ary.length - 1;
      if (num === ary.length + 1) return 0;
      return num;
    }
  }
  magicSquare(7);
}
