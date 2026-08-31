export function thirdMax(nums: number[]): number {
  let t1: number | null = null
  let t2: number | null = null
  let t3: number | null = null
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === t1 || num === t2 || num === t3) continue
    if (num > (t1 ?? -Infinity)) {
      t3 = t2
      t2 = t1
      t1 = num
    } else if (num > (t2 ?? -Infinity)) {
      t3 = t2
      t2 = num
    } else if (num > (t3 ?? -Infinity)) {
      t3 = num
    }
  }
  if (t3 !== null) return t3
  return t1 ?? 0
}
