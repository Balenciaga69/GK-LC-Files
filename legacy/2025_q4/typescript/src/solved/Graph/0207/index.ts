/*
Date: 2025-10-**
TimeSpent: ** mins
---
題目名稱: 207. Course Schedule
你需要修完 `numCourses` 門課程，編號從 `0` 到 `numCourses - 1`。
某些課程之間有先修條件，用陣列 `prerequisites` 表示：
`prerequisites[i] = [a, b]` 表示：修課 `a` 之前，必須先修完 `b`。
請判斷是否能修完所有課程。
---
範例 1：
輸入：
numCourses = 2, prerequisites = [[1,0]]
輸出：true
解釋：先修課 0，再修課 1。
---
範例 2：
輸入：
numCourses = 2, prerequisites = [[1,0],[0,1]]
輸出：false
解釋：形成循環 (0→1→0)，無法修完所有課程。
---
限制條件：
- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= 5000
- prerequisites[i].length == 2
- 0 <= a, b < numCourses
*/
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {}
// 未完成
