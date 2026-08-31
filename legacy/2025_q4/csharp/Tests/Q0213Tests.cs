using Shared.Solutions;

namespace Tests;
public class Q0213Tests
{
    [Theory]
    [InlineData(new int[] { 0, 0 }, 0)]
    [InlineData(new int[] { 2, 3, 2 }, 3)]
    [InlineData(new int[] { 1, 2, 3, 1 }, 4)]
    [InlineData(new int[] { 1 }, 1)]
    [InlineData(new int[] { 2, 1, 1, 2 }, 3)]
    [InlineData(new int[] { 100, 1, 1, 100 }, 200)]
    [InlineData(new int[] { 2, 7, 9, 3, 1 }, 12)]
    [InlineData(new int[] { 1, 100, 1, 100, 1, 100 }, 300)]
    public void TestRobCircular(int[] nums, int expected)
    {
        int result = new Solution().Rob(nums);
        Assert.Equal(expected, result);
    }
}
