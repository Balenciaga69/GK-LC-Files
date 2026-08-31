namespace lc0020 {
  function isValid(s: string): boolean {
    if (s.length <= 1) return false
    const A = ['(', '{', '[']
    const B = [')', '}', ']']
    const stack: string[] = []
    for (let target of s.split('')) {
      if (A.indexOf(target) > 0) {
        stack.push(target)
      } else {
        let idx = B.indexOf(target)
        if (A[idx] === stack[stack.length - 1]) {
          stack.pop()
        } else {
          return false
        }
      }
    }
    // 有殘留 括號
    return stack.length === 0
  }
  const s = '(([]({})))'
  const out = isValid(s)
  console.log(`正在測試...`, out)
}
