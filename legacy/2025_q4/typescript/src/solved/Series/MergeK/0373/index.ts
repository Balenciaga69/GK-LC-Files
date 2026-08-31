/*
Tags: Array, Heap (Priority Queue), Matrix
Date: 2025-11-04
TimeSpent: 25 mins
---
You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
Define a pair (u, v) which consists of one element from the first array and one element from the second array.
Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.
---
Constraints:
1 <= nums1.length, nums2.length <= 10^5
-10^9 <= nums1[i], nums2[i] <= 10^9
nums1 and nums2 both are sorted in non-decreasing order.
1 <= k <= 10^4
k <= nums1.length * nums2.length
 */

interface PairWithSum {
  sum: number
  pair: [number, number]
  i: number
  j: number
}

export function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  if (!nums1.length || !nums2.length || k === 0) return []
  
  const result: number[][] = []
  const minHeap: PairWithSum[] = []
  
  // 初始化：將 nums1 的每個元素與 nums2[0] 的組合加入堆
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    insertToHeap(minHeap, {
      sum: nums1[i] + nums2[0],
      pair: [nums1[i], nums2[0]],
      i: i,
      j: 0
    })
  }
  
  while (result.length < k && minHeap.length > 0) {
    const current = extractMin(minHeap)
    result.push(current.pair)
    
    // 如果還有下一列可以加入
    if (current.j + 1 < nums2.length) {
      insertToHeap(minHeap, {
        sum: nums1[current.i] + nums2[current.j + 1],
        pair: [nums1[current.i], nums2[current.j + 1]],
        i: current.i,
        j: current.j + 1
      })
    }
  }
  
  return result
}

// 簡單的最小堆實現
function extractMin(heap: PairWithSum[]): PairWithSum {
  if (heap.length === 1) return heap.pop()!
  
  const min = heap[0]
  heap[0] = heap.pop()!
  heapifyDown(heap, 0)
  return min
}

function heapifyDown(heap: PairWithSum[], index: number): void {
  const left = 2 * index + 1
  const right = 2 * index + 2
  let smallest = index
  
  if (left < heap.length && shouldComeFirst(heap[left], heap[smallest])) {
    smallest = left
  }
  
  if (right < heap.length && shouldComeFirst(heap[right], heap[smallest])) {
    smallest = right
  }
  
  if (smallest !== index) {
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]]
    heapifyDown(heap, smallest)
  }
}

function insertToHeap(heap: PairWithSum[], item: PairWithSum): void {
  heap.push(item)
  heapifyUp(heap, heap.length - 1)
}

function heapifyUp(heap: PairWithSum[], index: number): void {
  if (index === 0) return
  
  const parentIndex = Math.floor((index - 1) / 2)
  if (shouldComeFirst(heap[index], heap[parentIndex])) {
    [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]]
    heapifyUp(heap, parentIndex)
  }
}

function shouldComeFirst(a: PairWithSum, b: PairWithSum): boolean {
  if (a.sum !== b.sum) return a.sum < b.sum
  // 當和相同時，優先考慮 nums1 中較小索引的元素
  if (a.i !== b.i) return a.i < b.i
  return a.j < b.j
}

/*
這題使用最小堆（Min Heap）來解決，核心思路是：
1. 由於兩個陣列都是排序的，最小的和一定是 nums1[0] + nums2[0]
2. 每次取出堆中最小的 pair 後，將其相鄰的可能候選項加入堆中
3. 相鄰候選項指的是 (i+1, j) 和 (i, j+1)

使用 visited Set 避免重複加入相同的索引組合。
這樣可以確保我們總是按照和的大小順序取出 pairs。

為什麼這個方法正確？
- 排序陣列的性質保證了如果 (i, j) 是當前最小的，那麼下一個最小的一定來自 (i+1, j) 或 (i, j+1)
- 堆確保我們總是優先處理當前和最小的 pair

---
時間複雜度：
O(k * log k)，每次堆操作需要 log k 時間，總共進行 k 次

空間複雜度：
O(k)，堆和 visited set 的空間
*/
