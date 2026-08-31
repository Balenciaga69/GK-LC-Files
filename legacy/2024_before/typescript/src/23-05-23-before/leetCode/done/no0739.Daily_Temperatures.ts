namespace lc0739 {
  function dailyTemperatures(temperatures: number[]): number[] {
    const ans: number[] = new Array(temperatures.length).fill(0);
    const idxStack: number[] = [];
    const n = temperatures.length - 1;
    for (let i = n; i >= 0; i--) {
      // 該日 val 比 stack top 小 就push
      // 一直pop pop到 stack空 或者 比stack top小
      while (
        idxStack.length > 0 &&
        temperatures[idxStack[idxStack.length - 1]] <= temperatures[i]
      )
        idxStack.pop();
      if (idxStack.length === 0) ans[i] = 0;
      else ans[i] = idxStack[idxStack.length - 1] - i;
      idxStack.push(i);
    }
    return ans;
  }
  const temperatures = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];
  dailyTemperatures(temperatures);
}
