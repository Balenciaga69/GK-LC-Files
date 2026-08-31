# my_leetcode_solved

我的 LeetCode 解題總庫，依語言分資料夾。三個現役語言各自是獨立專案，互不相依。

## 目錄

| 目錄 | 內容 | 說明文件 |
|---|---|---|
| `csharp/` | C# 解題，43 題 | `csharp/README.md` |
| `py/` | Python 解題 | `py/README.md` |
| `typescript/` | TypeScript 解題 | `typescript/README.md` |
| `legacy/` | 歷代封存，只查考，不新增 | `legacy/README.md` |

## 各語言的命名慣例

三個語言的慣例刻意不強求一致，因為各自的生態習慣不同。C# 的類別名要跟題號對應，
所以題解是平鋪的檔案；Python 跟 TypeScript 走一題一個資料夾，解答跟測試放在一起。

| 語言 | 題解位置 | 測試位置 |
|---|---|---|
| C# | `csharp/LeetCode/Solutions/S0001.cs` | `csharp/LeetCode.Test/S0001Tests.cs` |
| Python | `py/lc0001/sol.py` | `py/lc0001/test.py` |
| TypeScript | `typescript/src/solved/lc0100/index.ts` | 同資料夾的 `index.test.ts` |

三個語言都是題號補滿四位數。共用工具分別放在 `csharp/LeetCode/Utilities/`、
`py/helper/`、`typescript/src/utils/`。

## 怎麼跑測試

C#：

```bash
dotnet test csharp/LeetCode.slnx
```

Python，在 `py/` 目錄底下：

```bash
python -m pytest -q
```

TypeScript，在 `typescript/` 目錄底下：

```bash
pnpm test
```

## 給 AI 的注意事項

- 忽略 `.git/`、`.vs/`、`.vscode/`、`node_modules/`、`bin/`、`obj/`、`__pycache__/`
- 新增或修改題解時照該語言既有的命名方式，並同步補測試
- 改某一題只動那一題的檔案，不要順手改無關題目
- `legacy/` 底下的東西不要改，那是封存的歷史紀錄。裡面有兩個已知壞掉但刻意不修的地方，
  原因寫在 `legacy/README.md`
