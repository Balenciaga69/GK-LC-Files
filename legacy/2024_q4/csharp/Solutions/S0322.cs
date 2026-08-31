namespace Csharp.Solutions.S0322;
public class Solution
{
    public Solution()
    {
        var coins = new int[] { 2 };
        var amount = 3;

        this.CoinChange(coins, amount);
    }

    public int CoinChange(int[] coins, int amount)
    {
        var dp = new int[amount + 1];
        Array.Fill(dp, int.MaxValue);
        dp[0] = 0;

        foreach (var coinValue in coins)
        {
            for (var i = 1; i <= amount; i++)
            {
                if (i - coinValue >= 0)
                {
                    var safeDpMin = dp[i - coinValue] == int.MaxValue ? int.MaxValue : dp[i - coinValue] + 1;
                    dp[i] = Math.Min(dp[i], safeDpMin);
                }
            }
        }

        return dp[amount] == int.MaxValue ? -1 : dp[amount];
    }
}