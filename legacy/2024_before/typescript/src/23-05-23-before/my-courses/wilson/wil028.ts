namespace wil028 {
  function palindrome(str = "") {
    let left = 0;
    let right = str.length - 1;
    let bool = true;
    while (left < right) {
      if (str[left] !== str[right]) {
        bool = false;
        break;
      } else {
        left++;
        right--;
      }
    }
    return bool;
  }
  const testData = "123a321";
  const result = palindrome(testData);
  console.log(`正在測試...`, result);
}
