/*
#2: 2025-10-30 [40mins] [BFS] 
#1: 2025-10-30 [40mins] [DP] 
---
139. 单词拆分
給你一個字串 s 和一個字典 wordDict，請判斷 s 是否能夠被「空格」拆分成一個或多個字典中出現的單詞。
注意：
字典中的單詞可以重複使用多次。
所有單詞都由小寫英文字母組成。
---
範例 1：
輸入：s = "leetcode", wordDict = ["leet","code"]
輸出：true
解釋：返回 true，因為 "leetcode" 可以被拆分成 "leet code"。
範例 2：
輸入：s = "applepenapple", wordDict = ["apple","pen"]
輸出：true
解釋：返回 true，因為 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意字典中的單詞可以重複使用。
範例 3：
輸入：s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
輸出：false
解釋：無法用字典組成完整字串。
cat|san|dog
---
1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s 和 wordDict[i] 僅包含小寫英文字母
wordDict 中的所有字詞都是唯一的
*/
export function wordBreak(s: string, wordDict: string[]): boolean {
  if (s.length === 0) return true
  return method_bfs_1(s, wordDict)
}
/*
'catcatsdog', ['cats', 'dog', 'sand', 'and', 'cat']
cat|cat|sdog(x)
cat|cats|dog(o)
*/
function method_bfs_1(s: string, wordDict: string[]): boolean {
  const n = s.length
  const set = new Set<string>(wordDict)
  const queue: number[] = [0]
  const visited = new Set<number>()
  visited.add(0)

  while (queue.length > 0) {
    const start = queue.shift()!
    for (let end = start + 1; end <= n; end++) {
      const curWord = s.substring(start, end)
      if (set.has(curWord)) {
        if (end === n) return true

        // 防止重複造訪
        if (!visited.has(end)) {
          queue.push(end)
          visited.add(end)
        }
      }
    }
  }
  return false
}
function method_dp_1(s: string, wordDict: string[]): boolean {
  const n = s.length
  const dp = new Array(n + 1).fill(false)
  dp[0] = true
  const set = new Set<string>(wordDict)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      const curWord = s.substring(j, i + 1)
      if (dp[j] && set.has(curWord)) dp[i + 1] = true
    }
  }
  return dp[n]
}
