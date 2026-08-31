# csharp

C# 版本的 LeetCode 解題專案，目標框架 net10.0。

## 目錄與命名

- 解答放在 `LeetCode/Solutions/`，檔名用 `S####.cs`，例如 `S0001.cs`
- 測試放在 `LeetCode.Test/`，檔名用 `S####Tests.cs`，例如 `S0001Tests.cs`
- 共用的 List、Tree、Graph 工具放在 `LeetCode/Utilities/`
- 命名空間固定兩個：`LeetCode.Solutions` 與 `LeetCode.Utilities`

題號補滿四位數。類別名稱跟檔名一致，例如 `S0001.cs` 裡的類別就叫 `S0001`。

## 執行

```bash
dotnet test csharp/LeetCode.slnx
```

方案裡有兩個專案：`LeetCode`（題解）與 `LeetCode.Test`（測試）。

## 給 AI 的注意事項

改某一題只動對應的 `S####.cs` 和 `S####Tests.cs`，不要碰無關題目。
遇到 ListNode、TreeNode、Graph 題，先看 `Utilities/` 是否已有工具。
新增題目要同步補測試，不要只交解答。
