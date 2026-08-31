/*
Tags: Array, Divide and Conquer, Binary Indexed Tree, Segment Tree, Line Sweep, Heap (Priority Queue)
---
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance.
Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.

The geometric information of each building is given in the array buildings where buildings[i] = [lefti, righti, heighti]:
- lefti is the x coordinate of the left edge of the ith building.
- righti is the x coordinate of the right edge of the ith building.
- heighti is the height of the ith building.

You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

The skyline should be represented as a list of "key points" sorted by their x-coordinate in the form [[x1,y1],[x2,y2],...].
Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list,
which always has a y-coordinate 0 and is used to mark the skyline's termination where the rightmost building ends.
Any ground between the leftmost and rightmost buildings should be part of the skyline's contour.
---
Constraints:
1 <= buildings.length <= 10^4
0 <= lefti < righti <= 2^31 - 1
1 <= heighti <= 2^31 - 1
buildings is sorted by lefti in non-decreasing order.
 */

interface Event {
  x: number
  height: number
  isStart: boolean
}

export function getSkyline(buildings: number[][]): number[][] {
  const events: Event[] = []
  
  // 為每個建築物創建開始和結束事件
  for (const [left, right, height] of buildings) {
    events.push({ x: left, height, isStart: true })
    events.push({ x: right, height, isStart: false })
  }
  
  // 排序事件：
  // 1. 按 x 座標排序
  // 2. 如果 x 相同，開始事件優先於結束事件
  // 3. 如果都是開始事件，高度大的優先
  // 4. 如果都是結束事件，高度小的優先
  events.sort((a, b) => {
    if (a.x !== b.x) return a.x - b.x
    if (a.isStart !== b.isStart) return a.isStart ? -1 : 1
    if (a.isStart) return b.height - a.height  // 開始事件：高度大的優先
    return a.height - b.height  // 結束事件：高度小的優先
  })
  
  const result: number[][] = []
  const activeHeights: number[] = [0]  // 使用陣列模擬最大堆，0 表示地面高度
  
  for (const event of events) {
    const prevMaxHeight = Math.max(...activeHeights)
    
    if (event.isStart) {
      activeHeights.push(event.height)
    } else {
      // 移除一個高度為 event.height 的建築物
      const index = activeHeights.indexOf(event.height)
      if (index !== -1) {
        activeHeights.splice(index, 1)
      }
    }
    
    const currentMaxHeight = Math.max(...activeHeights)
    
    // 如果最大高度改變了，就是一個關鍵點
    if (currentMaxHeight !== prevMaxHeight) {
      result.push([event.x, currentMaxHeight])
    }
  }
  
  return result
}

/*
這題使用事件掃描線（Event Sweep Line）算法來解決：

核心思路：
1. 將每個建築物的左邊界當作「開始事件」，右邊界當作「結束事件」
2. 按 x 座標排序所有事件
3. 維護當前活躍建築物的高度集合
4. 當最大高度改變時，就產生一個關鍵點

為什麼需要特殊的排序規則？
- 同一個 x 座標可能有多個事件發生
- 開始事件要優先於結束事件處理（避免高度暫時降為 0）
- 同時開始的建築物，高的要先處理
- 同時結束的建築物，低的要先處理

這樣可以正確處理建築物重疊的情況。

注意：這裡為了簡化使用陣列來模擬堆，實際上可以用更高效的資料結構如 TreeMap。

---
時間複雜度：
O(n^2)，其中 n 是建築物數量。每次查找最大值需要 O(n) 時間

空間複雜度：
O(n)，用來存儲活躍高度和事件

優化版本可以使用平衡二元搜尋樹或多重集合來達到 O(n log n) 的時間複雜度。
*/
