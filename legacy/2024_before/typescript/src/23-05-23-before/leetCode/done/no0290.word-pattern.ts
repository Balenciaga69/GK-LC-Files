namespace lc0290 {
 const a1 = "aaa";
 const a2 = "aa aa aa aa";
 wordPattern(a1, a2);

 interface iPatten {
  key: string;
  val: string;
 }
 function wordPattern(pattern: string, s: string): boolean {
  const ka = pattern.split("");
  const va = s.split(" ");
  if (ka.length != va.length) return false;
  const allItem: iPatten[] = [];
  for (let i = 0; i < pattern.length; i++) {
   const key = ka[i];
   const val = va[i];
   if (allItem.find(e => e.key === key && e.val !== val)) return false;
   if (allItem.find(e => e.key !== key && e.val === val)) return false;
   const target = allItem.find(item => item.key === key && item.val == val);
   if (!target) allItem.push({ key, val });
  }
  return true;
 }
}
