/*
Date: 2025-10-**
TimeSpent: ** mins
---
題目名稱: 133. Clone Graph
給你一個連通的「無向圖」，圖中的每個節點包含一個整數值 `val` 與一個鄰接清單 `neighbors`。
請你回傳該圖的「深拷貝（clone）」。
圖的格式如下：
- 每個節點用唯一整數表示。
- 節點之間的連結透過鄰接清單描述。
你需要建立一個「全新但結構相同」的圖，每個節點的 `val` 與 `neighbors` 都與原圖對應節點相同，但物件引用不同。
---
範例 1：
輸入：
adjList = [[2,4],[1,3],[2,4],[1,3]]
輸出：
[[2,4],[1,3],[2,4],[1,3]]
解釋：
輸入圖如下：
   1 -- 2
   |    |
   4 -- 3
輸出圖應該是完全相同結構的新圖。
---
範例 2：
輸入：adjList = [[]]
輸出：[[]]
解釋：輸入是一個只有單一節點、沒有鄰居的圖。
---
範例 3：
輸入：adjList = []
輸出：[]
解釋：空圖。
---
限制條件：
- 節點數量在 [0, 100] 之間。
- 每個節點的值為唯一的整數 [1, 100]。
- 無向圖保證為連通（若非空）。
*/
export function cloneGraph(node: _Node | null): _Node | null {}
// 未完成

/*
相關題目家族：
- 138. Copy List with Random Pointer（類似的「深拷貝」結構）
- 207. Course Schedule（圖的拓樸排序）
- 210. Course Schedule II（同上，需輸出順序）
- 261. Graph Valid Tree（圖的有效性檢查）
- 323. Number of Connected Components in an Undirected Graph
*/
