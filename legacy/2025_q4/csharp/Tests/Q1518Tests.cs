namespace Tests;

using Shared.Solutions;
using Xunit;

public class Q1518Tests
{
    [Theory]
    [InlineData(9, 3, 13)]
    [InlineData(15, 4, 19)]
    [InlineData(4, 2, 7)]
    [InlineData(5, 3, 7)]
    [InlineData(1, 5, 1)]
    [InlineData(100, 5, 124)]
    public void NumWaterBottlesTest(int numBottles, int numExchange, int expected)
    {
        var solution = new Solution();
        var actual = solution.NumWaterBottles(numBottles, numExchange);
        Assert.Equal(expected, actual);
    }
}