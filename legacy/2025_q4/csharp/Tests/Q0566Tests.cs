using Shared.Solutions;

namespace Tests;

public class Q0566Tests
{
    public static IEnumerable<object[]> MatrixReshapeTestData =>
        new List<object[]>
        {
            new object[]
            {
                new int[][] { new int[] { 1, 2 }, new int[] { 3, 4 } },
                1,
                4,
                new int[][] { new int[] { 1, 2, 3, 4 } },
            },
            new object[]
            {
                new int[][] { new int[] { 1, 2 }, new int[] { 3, 4 } },
                2,
                4,
                new int[][] { new int[] { 1, 2 }, new int[] { 3, 4 } },
            },
            new object[]
            {
                new int[][] { new int[] { 1, 2, 3 }, new int[] { 4, 5, 6 } },
                3,
                2,
                new int[][] { new int[] { 1, 2 }, new int[] { 3, 4 }, new int[] { 5, 6 } },
            },
            new object[]
            {
                new int[][] { new int[] { 1 }, new int[] { 2 }, new int[] { 3 }, new int[] { 4 } },
                2,
                2,
                new int[][] { new int[] { 1, 2 }, new int[] { 3, 4 } },
            },
            new object[]
            {
                new int[][] { new int[] { 1, 2, 3, 4 } },
                2,
                2,
                new int[][] { new int[] { 1, 2 }, new int[] { 3, 4 } },
            },
        };

    [Theory]
    [MemberData(nameof(MatrixReshapeTestData))]
    public void MatrixReshapeTest(int[][] mat, int r, int c, int[][] expected)
    {
        var solution = new Solution();
        var actual = solution.MatrixReshape(mat, r, c);
        Assert.True(AreMatricesEqual(expected, actual));
    }

    private bool AreMatricesEqual(int[][] a, int[][] b)
    {
        if (a.Length != b.Length)
            return false;
        for (int i = 0; i < a.Length; i++)
        {
            if (a[i].Length != b[i].Length)
                return false;
            for (int j = 0; j < a[i].Length; j++)
                if (a[i][j] != b[i][j])
                    return false;
        }
        return true;
    }
}
