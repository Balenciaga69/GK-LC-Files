# legacy — 歷代解題封存

這裡放的是過去幾年不同時期刷 LeetCode 留下來的東西，**只查考，不在這裡新增題目**。
新題請寫在 repo 根目錄的 `csharp/`、`py/`、`typescript/`。

保留的理由是它記錄了習慣的變化：題號怎麼編、測試寫不寫、一題放一個檔還是一個資料夾，
每個世代都不一樣。所以各世代**原本的檔名寫法一律沒有動過**，只把外層的語言資料夾名稱
統一成小寫（`CSharp`、`Csharp`、`Py`、`Typescript` 都改成 `csharp`、`py`、`typescript`），
方便跟現役目錄對照。

## 關於資料夾名稱裡的年份

`2024_before`、`2024_q4`、`2025_q4` 這三個名字是當初自己標的，不是 git 記錄的日期。
git 上 `2024_before` 跟 `2024_q4` 都顯示 2025-09-07，那是一次性補進版控的日子，
不是當年寫程式的日子。真正的年份只有資料夾名稱這個線索，所以沒有去改動它。

## 三個世代一覽

| 世代 | 語言 | 題數 | 題號寫法 | 一題一檔還是一夾 | 有測試 | 執行環境 |
|---|---|---:|---|---|---|---|
| `2024_before` | C# | 24 | `S0001-Two-Sum.cs`，後期退化成只有題號的 `S0072.cs` | 一題一檔，全平鋪 | 沒有 | net6.0，主控台程式 |
| `2024_before` | TypeScript | 121 已解、7 未解 | `no0003.LongestSubstring...ts` | 一題一檔 | 沒有 | 另有 22 個自學練習放在 `my-courses/` |
| `2024_q4` | C# | 39 | `S0014.cs` | 一題一檔 | 沒有 | net8.0，主控台程式 |
| `2024_q4` | Python | 20 | `s0001.py`，小寫 s | 一題一檔 | 沒有 | 共用結構放在 `solved/dataStructure/` |
| `2025_q4` | C# | 8 | `Q0054.cs` 配 `Q0054Tests.cs` | 一題一檔 | 有 | net9.0，拆成 `Shared` 與 `Tests` 兩個專案 |
| `2025_q4` | Go | 7 | `solved/q0001/two_sum.go` 配 `_test.go` | 一題一夾 | 有 | go 1.24.3，模組名 `LeetCode` |
| `2025_q4` | TypeScript | 91 個檔 | 按解法分類，例如 `solved/DynamicProgramming/` | 一題一檔 | 有 | 另有排序演算法與面試題練習兩區 |

同一個「題號」的概念，歷代用過五種前綴：`S`、`s`、`Q`、`q`、`lc`。這不是錯誤，是換習慣的痕跡。

## 各世代怎麼跑

C# 三個世代各自有獨立的 `Csharp.sln`，彼此不相干：

```bash
dotnet build legacy/2024_before/csharp/Csharp.sln
```

```bash
dotnet build legacy/2024_q4/csharp/Csharp.sln
```

```bash
dotnet test legacy/2025_q4/csharp/Csharp.sln
```

Go 那個世代有寫好的 Makefile，也可以直接跑測試：

```bash
go test ./... 
```

在 `legacy/2025_q4/golang/` 底下執行。

## 已知壞掉、刻意不修的地方

這兩個問題在整理之前就存在。整理只改了檔名跟資料夾名，沒有動任何程式邏輯，所以它們原樣保留：

| 位置 | 症狀 |
|---|---|
| `2025_q4/csharp/Tests/Q0213Tests.cs` | 44 個測試裡有 2 個失敗（`TestRobCircular`），是題解本身的邏輯問題 |
| `2025_q4/golang/solved/q0566/reshape_the_matrix.go` | 編譯不過，`missing return`。整個 `q0566` 套件因此建置失敗，其餘 6 個套件都正常 |

那個 Go 檔案原本的檔名拼成 `resharp_the_matrix.go`，已改正為 `reshape`。檔名跟編譯錯誤是兩件事，改名不會修掉 `missing return`。

## 兩個跑不起來的 TypeScript 專案

`2024_before/typescript` 跟 `2025_q4/typescript` 都沒有安裝相依套件（沒有 `node_modules`），
所以整理前後都無法執行測試。要跑的話得先在該目錄底下安裝：

```bash
npm ci
```

這兩個專案在這次整理中只改了資料夾名稱（`2025_q4` 的 `sloved` 改成 `solved`、
`2024_before` 的 `incompelete` 改成 `incomplete`），沒有動任何 import。
所有 import 都是相對路徑而且是往上層找（例如 `../../../utils/listUtils`），
資料夾自己改名不影響層數，但因為沒有相依套件，這一點沒有實際執行驗證過。

## 幾個不能改名的地方

以下名稱被程式內容寫死，改了就會壞，整理時刻意避開：

| 名稱 | 被誰寫死 |
|---|---|
| `2024_q4/py/solved/dataStructure/` | 題解用 `from dataStructure.ListNode import ...` 匯入 |
| `2025_q4/golang/solved/` | `main.go` 裡寫死 `go test ./solved/...` |
