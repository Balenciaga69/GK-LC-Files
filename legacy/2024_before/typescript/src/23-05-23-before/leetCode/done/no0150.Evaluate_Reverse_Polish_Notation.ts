namespace lc0150 {
  function evalRPN(tokens: string[]): number {
    let ans = 0;
    const ops = ["+", "-", "*", "/"] as const;
    const numStack: number[] = [];
    tokens.forEach((e) => {
      if (ops.find((e2) => e2 === e)) {
        let r = numStack.pop()!;
        let l = numStack.pop()!;
        if (e === "+") numStack.push((l + r) | 0);
        if (e === "-") numStack.push((l - r) | 0);
        if (e === "*") numStack.push((l * r) | 0);
        if (e === "/") numStack.push((l / r) | 0);
      } else numStack.push(Number(e));
    });
    return numStack.pop() || 0;
  }
  const token1 = [
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ];
  const token2 = ["4", "13", "5", "/", "+"];
  //   evalRPN(token1);
  evalRPN(token1);
}
