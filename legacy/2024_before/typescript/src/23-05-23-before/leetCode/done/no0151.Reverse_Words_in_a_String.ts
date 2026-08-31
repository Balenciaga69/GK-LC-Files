namespace lc0151 {
  function reverseWords(s: string): string {
    let ary = s.split(" ");
    ary = ary.map((e) => e.trim()).filter((e) => e !== "");
    return ary.reverse().join(" ");
  }
  reverseWords("  hello world  ");
}
