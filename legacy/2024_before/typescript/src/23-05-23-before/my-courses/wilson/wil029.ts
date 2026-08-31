namespace wil028 {
  function isSub(str: string, sub: string) {
    let slow = 0;
    let fast = 0;
    while (fast < str.length) {
      if (sub[slow] === str[fast]) slow++;
      fast++;
      if (slow >= sub.length) break;
    }
    return slow >= sub.length ? true : false;
  }
  console.log("brooklyn", isSub("brooklyn", "bool"));
}
