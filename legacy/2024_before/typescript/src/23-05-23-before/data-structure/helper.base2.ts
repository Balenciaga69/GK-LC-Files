export function base2(n: number) {
  let s = "";
  while (n > 0) {
    s = (n % 2) + s;
    n = Math.floor(n / 2);
  }
}
