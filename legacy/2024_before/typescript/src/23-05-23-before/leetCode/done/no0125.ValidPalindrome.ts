namespace lc0125 {
  function isPalindrome(s: string): boolean {
    // * * * * *  * * * * *
    s = s.toLowerCase();
    // * * * * *  * * * * *
    let l = 0;
    let r = s.length - 1;
    while (l <= r) {
      if (!pass(s[l])) {
        l++;
        continue;
      }
      if (!pass(s[r])) {
        r--;
        continue;
      }
      if (s[l] !== s[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }
  function pass(s: string) {
    let code = s.charCodeAt(0);
    const isAlpha = code >= 97 && code <= 122;
    const isNum = code >= 48 && code <= 57;
    return isNum || isAlpha;
  }
  isPalindrome("A man, a plan, a canal: Panama");
}
