namespace Shared.Solutions;

// Topics: Array, DP
public partial class Solution
{
    public int MaxProfit_0121(int[] prices)
    {
        int minPrice = int.MaxValue;
        int maxProfit = 0;
        foreach (var price in prices)
        {
            minPrice = Math.Min(minPrice, price);
            maxProfit = Math.Max(maxProfit, price - minPrice);
        }
        return maxProfit;
    }
}
