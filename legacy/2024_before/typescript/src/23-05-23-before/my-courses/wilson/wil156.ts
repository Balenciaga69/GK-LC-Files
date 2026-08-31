namespace wil156 {
  const STR = "ABC";
  const RESULT: string[] = [];
  const LEN = STR.length;
  P("", new Array(LEN).fill(false));
  function P(curr: string, isDone: boolean[]) {
    if (curr.length === LEN) {
      RESULT.push(curr);
      return;
    }
    for (let i = 0; i < LEN; i++) {
      if (isDone[i]) continue;
      let newAry = Array.from(isDone);
      newAry[i] = true;
      P(curr + STR[i], newAry);
    }
  }
}
