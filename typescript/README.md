# typescript

TypeScript 版本的 LeetCode 解題專案。

## 目錄與命名

- 一題一個資料夾，放在 `src/solved/lc####/`，題號補滿四位數，例如 `lc0100`
- 解答固定叫 `index.ts`
- 測試固定叫 `index.test.ts`
- 共用工具放在 `src/utils/`，目前有 `graphUtils`、`listUtils`、`treeUtils` 三個

題目之間一律用相對路徑匯入。測試匯入自己的解答寫 `./index`，要用共用工具寫 `../../utils/treeUtils`。

## 執行

```bash
pnpm test
```

其他可用的指令：

| 指令 | 用途 |
|---|---|
| `pnpm test` | 跑全部測試 |
| `pnpm test:watch` | 監看檔案變動，改完自動重跑 |
| `pnpm test:coverage` | 產生覆蓋率報告 |
| `pnpm test:ci` | 序列執行，給 CI 用 |

測試框架是 jest 配 ts-jest，設定在 `jest.config.cjs`，型別設定分成 `tsconfig.json`
與 `tsconfig.jest.json` 兩份。

## 範例

`src/solved/lc0100/index.test.ts` 的開頭：

```typescript
import { isSameTree } from './index'
import { createBinaryTree } from '../../utils/treeUtils'

describe('100. Same Tree', () => {
  it('範例1: 結構與值皆相同', () => {
    // ...
  })
})
```

`describe` 的標題用「題號. 英文題名」，測試案例的說明用中文。

## 給 AI 的注意事項

改某一題只動對應的 `src/solved/lc####/index.ts` 與 `index.test.ts`，不要碰無關題目。
遇到 ListNode、TreeNode、Graph 題，先看 `src/utils/` 有沒有現成工具。
新增題目要同步補 `index.test.ts`，不要只交解答。

另外 `.github/instructions/guideline.instructions.md` 是給 GitHub Copilot 讀的簡短版本，
內容跟這份不衝突，只是它比較短。
