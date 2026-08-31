/*
Tags: Greedy, Array, Simulation
Date: 2025-10-28
---
給定兩個長度相同的整數陣列 gas 和 cost。
- gas[i] 代表你在第 i 個加油站能取得的汽油量。
- cost[i] 代表從第 i 個加油站開到下一個加油站所需消耗的汽油量。
你的車子有無限大的油箱，但初始油量為 0。  
請問是否存在一個加油站索引 i，讓你能從那個站出發，  
依序繞行整個環狀路線一圈回到原點，而中途油量永遠不會變成負數？
若存在，回傳該起點索引 i；若不存在，回傳 -1。
---
輸入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]  
輸出: 3  
解釋: 從第 3 個站出發：  
油量變化：0+4-1=3 → 3+5-2=6 → 6+1-3=4 → 4+2-4=2 → 2+3-5=0 → 成功回到起點
---
輸入: gas = [2,3,4], cost = [3,4,3]  
輸出: -1  
解釋: 無法繞一圈
---
限制條件
1 <= gas.length == cost.length <= 10^5  
0 <= gas[i], cost[i] <= 10^4
*/
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  const totalGas = gas.reduce((acc, cur) => acc + cur, 0)
  const totalCost = cost.reduce((acc, cur) => acc + cur, 0)
  if (totalCost > totalGas) return -1
  return MY_SOLUTION_B(gas, cost)
}
function MY_SOLUTION_B(gas: number[], cost: number[]): number {
  const n = gas.length
  let curGas = 0
  let startIdx = 0
  // 總油量 > 總花費 意味著 從某個出發點開始必定能跑完
  for (let i = 0; i < n; i++) {
    curGas += gas[i] - cost[i]
    if (curGas < 0) {
      // 跑不完 代表不是這一站 前往下一站開始
      curGas = 0
      startIdx = i + 1
      continue
    }
  }
  return startIdx
}
function MY_SOLUTION_A(gas: number[], cost: number[]): number {
  const n = gas.length
  for (let i = 0; i < n; i++) {
    let j = i
    let curGas = 0
    while (true) {
      curGas += gas[j] // 加油
      curGas -= cost[j] // 開車
      if (curGas < 0) break // 開不到終點
      if (j % n === (i - 1) % n) return i
      j = (j + 1) % n
    }
  }
  return -1
}
/*
方法B:
- 我使用一個線性掃描法
- 我從左到右模擬每個加油站。
- curGas 表示目前累積的油量。
- 當 curGas < 0 時，代表從目前的起點出發會在 i 號前掛掉。
- 因此我把起點移到下一站 i + 1，並重置油量。
- 最後當總油量大於等於總花費時，startIdx 就是唯一能繞完一圈的起點。
時間與空間複雜度
時間複雜度：O(n)
因為我們只掃過一次陣列。
空間複雜度：O(1)
只用了常數變數。
---
MY_SOLUTION_A 是暴力模擬法：從每個起點一路跑到底，檢查是否能繞一圈。
時間複雜度：O(n²)（每站可能重複遍歷整個陣列）
空間：O(1)
而我的 MY_SOLUTION_B 是「Greedy + 累積和」的想法，只需一輪掃描。
*/
