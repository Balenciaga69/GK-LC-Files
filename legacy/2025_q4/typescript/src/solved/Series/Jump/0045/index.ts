/*
#2: 2025-11-03 [9mins]
#1: 2025-11-03 [30mins]
給定一個長度為 n 的 0-indexed 整數陣列 nums。你一開始位於索引 0。
每個元素 nums[i] 代表你在索引 i 處最多可以往前跳的長度。換句話說，若你在索引 i，則你可以跳到任意索引 (i + j)，其中 0 <= j <= nums[i] 且 i + j < n。
請回傳到達最後一個索引（n - 1）所需的最少跳躍次數。保證一定可以到達最後一格。

範例 1：
輸入：nums = [2,3,1,1,4]
輸出：2
解釋：最少跳躍次數為 2。先從索引 0 跳到索引 1，再從索引 1 跳到最後一格。

範例 2：
輸入：nums = [2,3,0,1,4]
輸出：2

限制：
1 <= nums.length <= 10^4
0 <= nums[i] <= 1000
保證一定可以到達最後一格。
*/

export function jump(nums: number[]): number {
  return jump_2(nums)
}

function jump_2(nums: number[]): number {
  const n = nums.length
  if (n === 1) return 0
  // 0 -> 1,2
  // 1 -> 2,3,4
  // 2 -> 3
  // 3 -> 4
  let currFar = 0
  let next_decision_index = 0
  let times = 0
  let i = 0
  while (i < n - 1) {
    currFar = Math.max(currFar, i + nums[i])

    // 到達極限點的時候 就要決定下一個跳躍點是哪
    if (i === next_decision_index) {
      times++
      next_decision_index = currFar
    }
    i++
  }
  return times
}

function jump_1(nums: number[]): number {
  const n = nums.length
  if (n === 1) return 0
  let cur_index = 0
  let times = 0
  for (let i = 0; i < n - 1; i++) {
    if (i < cur_index) continue
    // 接下來 n 格 誰能跳最遠 or 直達終點
    times++
    const i_jump = i + nums[i]
    if (i_jump >= n - 1) return times // 直達終點就結束

    // 預測下個點的大小
    let next_farthest_length = 0
    for (let j = i + 1; j <= i_jump && j < n - 1; j++) {
      const j_jump = j + nums[j]
      // 能直達終點就
      if (j_jump >= n - 1) {
        cur_index = j
        break
      }
      // 不能就比大小
      if (j_jump > next_farthest_length) {
        next_farthest_length = j_jump
        cur_index = j
      }
    }
  }
  return times
}
