using Shared.Solutions;

namespace Tests;
public class Q0198Tests
{
    public static IEnumerable<object[]> TestCases()
    {
        // 題目範例
        yield return new object[] { new int[] { 2, 7, 9, 3, 1 }, 12 };
        yield return new object[] { new int[] { 1, 2, 3, 1 }, 4 };

        // 邊界情況
        yield return new object[] { new int[] { }, 0 };                  // 空陣列
        yield return new object[] { new int[] { 5 }, 5 };               // 只有一棟房子
        yield return new object[] { new int[] { 1, 2 }, 2 };            // 兩棟房子

        // 常見組合/陷阱
        yield return new object[] { new int[] { 0, 0, 0, 0 }, 0 };      // 全 0
        yield return new object[] { new int[] { 2, 1, 1, 2 }, 4 };      // 選左右兩端
        yield return new object[] { new int[] { 100, 1, 1, 100 }, 200 }; // 大值間隔

        // 混合案例
        yield return new object[] { new int[] { 1, 3, 1, 3, 100 }, 103 }; // 最佳為 3 + 100
        yield return new object[] { new int[] { 4, 1, 2, 7, 5, 3, 1 }, 14 }; // 綜合檢驗
    }

    [Theory]
    [MemberData(nameof(TestCases))]
    public void Rob_ReturnsExpected(int[] nums, int expected)
    {
        var solution = new Solution();
        int actual = solution.Rob_0198(nums);
        Assert.Equal(expected, actual);
    }
}