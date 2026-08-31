function canMeasureWater(x: number, y: number, target: number): boolean {
  const queue: number[][] = [[0, 0]]
  const set = new Set<string>()
  while (queue.length > 0) {
    const cur = queue.shift() ?? []
    const key = `${cur[0]}_${cur[1]}`
    if (set.has(key)) continue
    if (cur[0] + cur[1] === target) return true
    set.add(key)

    queue.push([0, cur[1]]) // pout a
    queue.push([cur[0], 0]) // pout b
    queue.push([x, cur[1]]) // fill a
    queue.push([cur[0], y]) // fill b
    const amount1 = Math.min(cur[0], y - cur[1])
    queue.push([cur[0] - amount1, cur[1] + amount1]) // pout into a
    const amount2 = Math.min(cur[1], x - cur[0])
    queue.push([cur[0] + amount2, cur[1] - amount2]) // pout into b
  }
  return false
}
