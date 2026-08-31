namespace lc2259 {
  function removeDigit(number: string, digit: string): string {
    const dig = Number(digit);
    let tIdx = -1;
    for (let i = 0; i < number.length; i++) {
      if (Number(number[i]) !== dig) continue;
      if (Number(number[i]) < Number(number[i + 1])) {
        tIdx = i;
        break;
      }
      tIdx = i;
    }
    number = remove(number, tIdx);
    return number;
  }
  function remove(str: string, n: number) {
    return str
      .split("")
      .map((e, i) => (i === n ? "X" : e))
      .join("")
      .replace("X", "");
  }
  removeDigit("53231", "3");
}
