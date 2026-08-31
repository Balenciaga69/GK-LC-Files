using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S0435
{
    public class Solution
    {
        public Solution()
        {
            var intervals = new int[][]
            {
            new int[] { 1, 2 },
            new int[] { 2, 3 },
            new int[] { 3, 4 },
            new int[] { 1, 3 },
            };
            this.EraseOverlapIntervals(intervals);
        }

        public int EraseOverlapIntervals(int[][] intervals)
        {
            if (intervals.Length == 0) return 0;
            Array.Sort(intervals, (a, b) => a[1] - b[1]);
            var count = 0;
            var lastEnd = int.MinValue;
            foreach (var interval in intervals)
            {
                var start = interval[0];
                var end = interval[1];
                if (lastEnd > start) count++;
                else lastEnd = end;
            }

            return count;
        }
    }
}