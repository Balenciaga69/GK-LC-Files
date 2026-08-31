using Shared.Solutions;

namespace Tests;
public class Q0073Tests
{
    // 使用 [MemberData] 來指定資料來源的方法名稱
    [Theory]
    [MemberData(nameof(MatrixZeroesTestData))]
    public void TestSetMatrixZeroes(int[][] matrix, int[][] expected)
    {
        var solution = new Solution();
        solution.SetZeroes(matrix);
        Assert.Equal(expected, matrix);
    }

    /// <summary>
    /// 為 Set Matrix Zeroes 問題提供測試資料的靜態方法。
    /// 必須返回 IEnumerable<object[]>。
    /// </summary>
    public static IEnumerable<object[]> MatrixZeroesTestData()
    {
        // 案例 1：基本情況，中間有一個 0
        yield return new object[]
        {
            new int[][] { new int[] { 1, 1, 1 }, new int[] { 1, 0, 1 }, new int[] { 1, 1, 1 } },
            new int[][] { new int[] { 1, 0, 1 }, new int[] { 0, 0, 0 }, new int[] { 1, 0, 1 } }
        };

        // 案例 2：多個 0，且 0 位於邊界
        yield return new object[]
        {
            new int[][] { new int[] { 0, 1, 2, 0 }, new int[] { 3, 4, 5, 2 }, new int[] { 1, 3, 1, 5 } },
            new int[][] { new int[] { 0, 0, 0, 0 }, new int[] { 0, 4, 5, 0 }, new int[] { 0, 3, 1, 0 } }
        };

        // 案例 3：矩陣中沒有 0
        yield return new object[]
        {
            new int[][] { new int[] { 5, 4, 3 }, new int[] { 2, 1, 9 } },
            new int[][] { new int[] { 5, 4, 3 }, new int[] { 2, 1, 9 } }
        };

        // 案例 4：0 在同一列或同一行，會互相影響
        yield return new object[]
        {
            new int[][] { new int[] { 1, 2, 3 }, new int[] { 4, 0, 6 }, new int[] { 7, 8, 9 }, new int[] { 10, 0, 12 } },
            new int[][] { new int[] { 1, 0, 3 }, new int[] { 0, 0, 0 }, new int[] { 7, 0, 9 }, new int[] { 0, 0, 0 } }
        };

        // 案例 5：最小矩陣 (1x1)，有 0
        yield return new object[]
        {
            new int[][] { new int[] { 0 } },
            new int[][] { new int[] { 0 } }
        };

        // 案例 6：所有元素皆為 0
        yield return new object[]
        {
            new int[][] { new int[] { 0, 0 }, new int[] { 0, 0 } },
            new int[][] { new int[] { 0, 0 }, new int[] { 0, 0 } }
        };
    }
}