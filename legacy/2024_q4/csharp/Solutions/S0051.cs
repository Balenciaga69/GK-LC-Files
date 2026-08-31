namespace Csharp.Solutions.S0051;
public class Solution
{
    public Solution()
    {
        this.SolveNQueens(4);
    }

    public IList<IList<string>> SolveNQueens(int n)
    {
        var allResult = new List<IList<string>>();
        var queenPosList = new List<(int, int)>();
        this.RecursivePlaceQueen(n, queenPosList, allResult);
        return allResult;
    }

    private void RecursivePlaceQueen(int n, List<(int, int)> queenPosList, List<IList<string>> allResult)
    {
        if (queenPosList.Count == n)
        {
            var result = this.CreateOneResult(queenPosList, n);
            allResult.Add(result);
            return;
        }

        for (int y1 = 0; y1 < n; y1++)
        {
            int x1 = queenPosList.Count;
            if (queenPosList.Any(pos => this.IsOnLines(x1, y1, pos.Item1, pos.Item2)))
            {
                continue;
            }

            queenPosList.Add((x1, y1));

            this.RecursivePlaceQueen(n, queenPosList, allResult);
            queenPosList.RemoveAt(queenPosList.Count - 1);
        }
    }

    private List<string> CreateOneResult(List<(int, int)> queenPosList, int n)
    {
        var list2D = new List<string>();
        foreach (var pos in queenPosList)
        {
            var y = pos.Item2;
            var rowStr = new string('.', n).Remove(y, 1).Insert(y, "Q");
            list2D.Add(rowStr);
        }

        return list2D;
    }

    private bool IsOnLines(int x1, int y1, int x2, int y2)
    {
        if (x1 == x2) return true; // 橫
        if (y1 == y2) return true; // 直
        if (x1 - y1 == x2 - y2) return true; // 左上到右下
        if (x1 + y1 == x2 + y2) return true; // 左下到右上
        return false; // 無關
    }
}