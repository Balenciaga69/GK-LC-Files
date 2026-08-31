namespace wil033 {
  const isRepeat = (str: string) => {
    const existAry: string[] = [];
    let i = 0;
    while (i < str.length) {
      const target = str[i];
      if (existAry.includes(target)) return true;
      existAry.push(target);
      i++;
    }
    return false;
  };
  function uniqueLetterSubstring(str: string) {
    let start = 0;
    let end = 0;
    let maxString = "";
    while (start < str.length) {
      let subString = str.substring(start, end + 1);
      //   重複 下一次子字串 內縮
      if (isRepeat(subString)) {
        start++;
      }
      //   不重複 下一次子字串 外擴
      else {
        //   超出邊界 跳離
        if (end > str.length - 1) {
          break;
        }
        // 範圍內 就計算
        else {
          maxString =
            maxString.length < subString.length ? subString : maxString;
          end++;
        }
      }
    }
    console.log(`maxString = `, maxString);
  }
  const text = "thisIsHowWeDoIt".toLowerCase();
  uniqueLetterSubstring(text);
}
