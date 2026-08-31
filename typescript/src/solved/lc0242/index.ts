export function isAnagram(s: string, t: string): boolean {
  const map = new Map<string, number>()
  // push t
  for (const alpha of t) {
    const nextNum = (map.get(alpha) ?? 0) + 1
    map.set(alpha, nextNum)
  }
  // reduce s
  for (const alpha of s) {
    const nextNum = (map.get(alpha) ?? 0) - 1
    map.set(alpha, nextNum)
  }
  // calc
  for (const [k, v] of map.entries()) {
    if (v !== 0) return false
  }
  return true
}
