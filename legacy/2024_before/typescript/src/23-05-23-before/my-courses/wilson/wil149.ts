namespace wil149 {
  function recLCS(a: string, b: string): number {
    const aEnd = a.length - 1;
    const bEnd = b.length - 1;
    const popA = a.substring(0, aEnd);
    const popB = b.substring(0, bEnd);
    if (a === "" || b === "") return 0;
    if (a[aEnd] === b[bEnd]) return 1 + recLCS(popA, popB);
    else return Math.max(recLCS(popA, b), recLCS(a, popB));
  }
  let res = recLCS("abcdec", "ace");
  console.log(`res...`, res);
}
