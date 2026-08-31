namespace Tests;
using Shared.Solutions;
public class Q0121Tests
{
    [Theory]
    [InlineData(new int[] { 7, 1, 5, 3, 6, 4 }, 5)]
    [InlineData(new int[] { 7, 6, 4, 3, 1 }, 0)]
    [InlineData(new int[] { 1, 2 }, 1)]
    [InlineData(new int[] { 1 }, 0)]
    public void Test1(int[] prices, int expected)
    {
        var result = new Solution().MaxProfit_0121(prices);
        Assert.Equal(expected, result);
    }
}
