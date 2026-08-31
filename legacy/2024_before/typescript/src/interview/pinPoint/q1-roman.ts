const romanConverter = {
  romanToInt: (roman: string) => {
    const romanMap: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }
    let sum = 0
    let lastAdd = 0
    for (let r of roman) {
      // 無法轉換成數字 或 變成 NaN則拋錯
      if (typeof romanMap[r] !== 'number' || isNaN(romanMap[r])) {
        throw new Error('錯誤')
      }

      if (romanMap[r] > lastAdd) {
        sum -= lastAdd * 2
      }

      sum += romanMap[r]
      lastAdd = romanMap[r]
    }
    return sum
  },
  intToRoman: (int: number) => {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romanNums = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
    ]

    let result = ''
    for (let i = 0; i < values.length; i++) {
      while (int >= values[i]) {
        int -= values[i]
        result += romanNums[i]
      }
    }

    return result
  },
}
const result = romanConverter.intToRoman(666)

/**
 * 遇到一些問題 例如 XXXXXXXX 會被轉換成 80 之類的
 * 確認題目範圍是否為 1~3999 後 使用Regex可解決
 */