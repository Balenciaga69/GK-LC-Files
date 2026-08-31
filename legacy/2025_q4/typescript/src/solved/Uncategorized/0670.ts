// https://leetcode.com/problems/maximum-swap/
// 0 <= num <= 10^8

function maximumSwap(num: number): number {
  const s = num.toString()
  const ary = s.split('')
  const n = s.length

  for (let i = 0; i < n; i++) {
    let maxIdx = i
    for (let j = i + 1; j < n; j++) {
      if (s[maxIdx] < s[j]) maxIdx = j
      if (maxIdx !== i && s[maxIdx] == s[j]) maxIdx = j
    }
    if (maxIdx !== i) {
      ;[ary[i], ary[maxIdx]] = [ary[maxIdx], ary[i]]
      return Number(ary.join(''))
    }
  }
  return Number(ary.join(''))
}

function maximumSwapOptimal(num: number): number {
  const s = num.toString()
  const ary = s.split('')
  const n = ary.length

  const lastIdxMap = new Array<number>(10).fill(-1)
  for (let i = 0; i < n; i++) {
    const digit = parseInt(ary[i])
    lastIdxMap[digit] = i
  }

  for (let i = 0; i < n; i++) {
    const curDigit = parseInt(ary[i])

    for (let d = 9; d > curDigit; d--) {
      const maxDigitLastIdx = lastIdxMap[d]

      if (maxDigitLastIdx > i) {
        ;[ary[i], ary[maxDigitLastIdx]] = [ary[maxDigitLastIdx], ary[i]]
        return Number(ary.join(''))
      }
    }
  }

  return num
}
