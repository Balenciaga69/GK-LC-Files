using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions
{
    internal class S0062_Unique_Paths
    {
        public void Run()
        {
            var result = this.UniquePaths(3, 2);
        }

        public int UniquePaths(int m, int n)
        {
            var dp = new int[m, n];
            dp[0, 0] = 1;
            for (int i = 0; i < m; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    // 貼著邊走 只有一種走法
                    if (i == 0 || j == 0)
                    {
                        dp[i, j] = 1;
                        continue;
                    }

                    dp[i, j] = dp[i - 1, j] + dp[i, j - 1];
                    Console.WriteLine($"dp{i},{j}={dp[i, j]} :{dp[i - 1, j]}+{dp[i, j - 1]}");
                }
            }

            return dp[m - 1, n - 1];
        }
    }
}
