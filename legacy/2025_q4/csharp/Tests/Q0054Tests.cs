using Shared.Solutions;

namespace Tests;

public class Q054Tests
{
    public static IEnumerable<object[]> SpiralMatrixData =>
        new List<object[]>
        {
            // 格式： new object[] { matrix, expected_output }

   
            // 邊緣案例 1: 單行
            new object[]
            {
                new int[][] { new int[] { 1, 2, 3, 4, 5 } },
                new int[] { 1, 2, 3, 4, 5 },
            },
        };

    [Theory]
    [MemberData(nameof(SpiralMatrixData))]
    public void SpiralMatrixTest(int[][] matrix, int[] expected)
    {
        var solution = new Solution();

        // NumWaterBottles 替換為 SpiralOrder
        var actual = solution.SpiralOrder(matrix);

        // 矩陣/列表比較必須確保元素和順序完全相同
        // Assert.Equal(expected, actual); // 如果 actual 是 List<int>，直接比較會失敗

        // 使用 Linq 來比較 List<int> 或 int[] 內容是否相等
        Assert.True(
            expected.SequenceEqual(actual),
            $"預期: [{string.Join(", ", expected)}], 實際: [{string.Join(", ", actual)}]"
        );
    }
}
