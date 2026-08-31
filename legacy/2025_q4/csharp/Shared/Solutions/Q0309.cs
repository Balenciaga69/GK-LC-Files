namespace Shared.Solutions;

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown

public partial class Solution
{
    public int MaxProfit_0309(int[] prices)
    {
        var n = prices.Length;
        var dp = new int[n, 3];
        dp[0, 0] = -prices[0]; // hold
        dp[0, 1] = 0; // empty hand
        dp[0, 2] = int.MinValue; // cooldown
        for (int i = 1; i < n; i++)
        {
            // 今天仍持股：Max 昨天已持股 vs 昨天空手 - 今天股價 (代表今天買入股票)
            dp[i, 0] = Math.Max(dp[i - 1, 0], dp[i - 1, 1] - prices[i]);
            // 今天空手：Max 昨天空手 vs 昨天還在冷卻 (今天冷卻結束)
            dp[i, 1] = Math.Max(dp[i - 1, 1], dp[i - 1, 2]);
            // 今天冷卻：只能來自 昨天已持股 + 今天賣出股價
            dp[i, 2] = dp[i - 1, 0] + prices[i];
        }
        return Math.Max(dp[n - 1, 1], dp[n - 1, 2]);
    }
}
