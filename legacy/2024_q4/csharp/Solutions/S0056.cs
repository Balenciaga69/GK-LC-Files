/*
 * 56. Merge Intervals
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

namespace Csharp.Solutions.S0056;
public class Solution
{
    public Solution()
    {
        var intervals = new int[][]
         {
            new int[] { 15, 18 },
            new int[] { 1, 3 },
            new int[] { 2, 6 },
            new int[] { 8, 10 },
         };

        this.Merge(intervals);
    }

    public int[][] Merge(int[][] intervals)
    {
        if (intervals.Length < 2) return intervals;
        Array.Sort(intervals, (a, b) => a[0] - b[0]);
        var merged = new List<int[]>();
        merged.Add(intervals[0]);
        foreach (var currItem in intervals)
        {
            var lastItem = merged.Last();

            if (lastItem[1] >= currItem[0]) // 在區間內
            {
                // 邊界比原本的大
                if (currItem[1] > lastItem[1])
                {
                    // 擴增範圍
                    var tempItem = new int[] { lastItem[0], currItem[1] };
                    merged[merged.Count - 1] = tempItem;
                }
            }
            else // 在區間外
            {
                merged.Add(currItem);
            }
        }

        return merged.ToArray();
    }
}

/*
 先排序；逐個比較區間
 */