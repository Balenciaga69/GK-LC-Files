# py

Python 版本的 LeetCode 解題專案。

## 目錄與命名

- 一題一個資料夾，名稱是 `lc####`，題號補滿四位數，例如 `lc0001`
- 解答固定叫 `sol.py`，裡面定義一個 `Solution` 類別
- 測試固定叫 `test.py`
- 每個題目資料夾都要有 `__init__.py`
- 共用工具放在 `helper/`

檔名 `sol.py` **不能改**。測試是用 `Path(__file__).with_name("sol.py")` 去定位解答檔的，
改了檔名測試就找不到。

## 測試怎麼寫

`helper/solution_loader.py` 提供 `load_solution_class()`，用檔案路徑動態載入解答，
不必處理套件匯入路徑的問題。範例：

```python
from pathlib import Path

from helper.solution_loader import load_solution_class


def test_two_sum():
    sol = load_solution_class(Path(__file__).with_name("sol.py"))
    assert sol.twoSum([2, 7, 11, 15], 9) == [0, 1]
```

## 執行

在 `py/` 目錄底下跑全部測試：

```bash
python -m pytest -q
```

只跑單一題目：

```bash
python -m pytest lc0001 -q
```

pytest 的設定寫在 `pyproject.toml`，其中 `python_files` 有加上 `test.py`，
所以不叫 `test_*.py` 的檔案也會被收進來。

## 環境

`pyproject.toml` 宣告 `requires-python = ">=3.13"`，格式與靜態檢查用 ruff，
行寬 88。實際跑測試用更舊的版本也可以，那個宣告主要是給 ruff 的 `target-version` 對齊用。

## 給 AI 的注意事項

改某一題只動對應的 `lc####/sol.py` 與 `lc####/test.py`，不要碰無關題目。
遇到 ListNode、TreeNode 這類題目，先看 `helper/` 有沒有現成工具。
新增題目要同步補 `test.py`，不要只交解答。
