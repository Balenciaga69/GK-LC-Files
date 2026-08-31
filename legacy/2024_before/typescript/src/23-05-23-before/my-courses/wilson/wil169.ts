namespace wil169 {
  function KMP(str1: string, str2: string) {
    const psAry: number[] = new Array(str2.length).fill(0);
    setAry(str2);
    // * * * * *  * * * * *
    let i = 0;
    let j = 0;
    let cnt = 0;
    while (i < str1.length) {
      // 1v1 匹配
      if (str1[i] === str2[j]) {
        i++;
        // 子字串 已匹配到最後一個字(完全匹配
        if (j === str2.length - 1) {
          cnt++;
          j = 0;
        }
        // 子字串 正在逐步匹配中
        else j++;
      }
      // 1v1 不匹配
      else {
        // 倒退 n 格
        i -= psAry[j];
        // 重新匹配
        j = 0;
      }
    }
    console.log(`cnt...`, cnt);
    // * * * * *  * * * * *
    function setAry(str: string) {
      let base = 0;
      for (let curr = 1; curr < str.length; curr++) {
        if (str[curr] !== str[base]) base = 0;
        else base = base + 1;
        psAry[curr] = base;
      }
      psAry.pop();
      /**
       * 逐步查找時
       * 主字串 會依照psAry移動
       * -1 代表 沒有半個字匹配，主字串往前查找
       *  2 代表 前兩個字匹配 往回推二字
       */
      psAry.unshift(-1);
    }
  }
  KMP("讚111讚", "讚11讚");
}
