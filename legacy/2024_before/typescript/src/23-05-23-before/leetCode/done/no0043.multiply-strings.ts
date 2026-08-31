namespace lc0043 {
 const num1 = "0",
  num2 = "0";
 multiply(num1, num2);
 function multiply(num1: string, num2: string): string {
  const l1 = num1.length;
  const l2 = num2.length;
  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");
  const ary: number[] = new Array(l1 + l2 + 1).fill(0);
  for (let i = 0; i < l2; i++) {
   for (let j = 0; j < l1; j++) {
    const digit = j + i;
    ary[digit] += Number(num1[j]) * Number(num2[i]);
    ary[digit + 1] += Math.floor(ary[digit] / 10);
    ary[digit] %= 10;
   }
  }
  if (ary.every(val => val == 0)) return "0";
  while (ary[ary.length - 1] == 0) ary.pop();
  return ary.reverse().join("");
 }
}
