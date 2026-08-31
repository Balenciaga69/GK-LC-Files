using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S0518
{
    public class Solution
    {
        public Solution()
        {
            var amount = 5;
            var coins = new int[] { 1, 2, 5 };
            this.Change(amount, coins);
        }

        public int Change(int amount, int[] coins)
        {
            var ways = new int[amount + 1];
            ways[0] = 1;

            foreach (var coinValue in coins)
            {
                for (int i = 1; i <= amount; i++)
                {
                    if (i - coinValue >= 0) ways[i] = ways[i] + ways[i - coinValue];
                }
            }

            return ways[amount];
        }

        public int Change_v1(int amount, int[] coins)
        {
            var d = new int[amount + 1];
            d[0] = 1;
            foreach (var coin in coins)
            {
                for (int i = 1; i <= amount; i++)
                {
                    var canChange = coin <= i;
                    if (!canChange) continue;
                    d[i] = d[i] + d[i - coin];
                }
            }

            return d[amount];
        }
    }
}