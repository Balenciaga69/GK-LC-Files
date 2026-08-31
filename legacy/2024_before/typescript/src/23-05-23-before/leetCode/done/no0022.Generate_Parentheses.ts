namespace lc0022 {
  function generateParenthesis(n: number): string[] {
    let ans: string[] = [];
    f("", 0, 0);
    function f(str: string, openCount: number, closeCount: number) {
      // 完成字串組成 就添加到ans
      if (str.length === n * 2) {
        ans.push(str);
        return;
      }
      // 先塞 開 試試看
      if (openCount < n) {
        f(str + "(", openCount + 1, closeCount);
      }
      // 不能比 左括號多
      // 再塞 關 試試看
      if (closeCount < openCount) {
        f(str + ")", openCount, closeCount + 1);
      }
    }
    return ans;
  }
  generateParenthesis(3);
}
