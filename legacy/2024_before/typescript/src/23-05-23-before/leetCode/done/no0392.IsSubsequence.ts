namespace lc0392 {
 function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) return false;
  let j = 0;
  for (let i = 0; i <= t.length; i++) {
   if (j === s.length) return true;
   if (s[j] === t[i]) j++;
  }
  return false;
 }
 const s = "abc";
 const t = "ahbgdc";
 isSubsequence(s, t);
}
