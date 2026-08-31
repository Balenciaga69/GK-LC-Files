namespace Csharp.Solutions
{
    internal class S0072
    {
        internal S0072()
        {
            this.MinDistance("", "a");
        }

        public int MinDistance(string word1, string word2)
        {
            int m = word1.Length, n = word2.Length;
            int[,] dp = new int[m + 1, n + 1];
            for (int i = 0; i < m; i++)
            {
                dp[i + 1, 0] = i + 1;
            }

            for (int j = 0; j < n; j++)
            {
                dp[0, j + 1] = j + 1;
            }

            for (int i = 1; i <= m; i++)
            {
                for (int j = 1; j <= n; j++)
                {
                    if (word1[i - 1] != word2[j - 1])
                    {
                        var replacement = dp[i - 1, j - 1] + 1;
                        var deleted = dp[i - 1, j] + 1;
                        var inserted = dp[i, j - 1] + 1;
                        var min = Math.Min(replacement, deleted);
                        min = Math.Min(min, inserted);
                        dp[i, j] = min;
                    }
                    else
                    {
                        dp[i, j] = dp[i - 1, j - 1];
                    }
                }
            }

            return dp[m == 0 ? 0 : m, n == 0 ? 0 : n];
        }
    }
}
