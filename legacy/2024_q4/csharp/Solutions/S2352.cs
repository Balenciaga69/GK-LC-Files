using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S2352
{
    public class Solution
    {
        public Solution()
        {
            var grid = new int[][]
            {
            [3, 1, 2, 2],
            [1, 4, 4, 5],
            [2, 4, 2, 2],
            [2, 4, 2, 2],
            };
            var grid2 = new int[][]
            {
                [13, 13],
                [13, 13],
            };
            this.EqualPairs(grid2);
        }

        public int EqualPairs(int[][] grid)
        {
            var n = grid.Length;
            var count = 0;
            var dict = new Dictionary<string, int>();
            for (var i = 0; i < n; i++)
            {
                var target = string.Join("-", grid[i]);
                dict[target] = dict.GetValueOrDefault(target) + 1;
            }

            for (var i = 0; i < n; i++)
            {
                var tempAry = new string[n];
                for (var j = 0; j < n; j++)
                {
                    tempAry[j] = grid[j][i].ToString();
                }

                var target = string.Join("-", tempAry);
                if (dict.ContainsKey(target))
                {
                    count += dict[target];
                }
            }

            return count;
        }
    }
}