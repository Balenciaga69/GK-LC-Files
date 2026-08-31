namespace Shared.Solutions;
public partial class Solution
{
    public int[][] MatrixReshape(int[][] mat, int r, int c)
    {
        var m = mat.Length;
        var n = mat[0].Length;
        // m x n <> r x c
        if (m * n != r * c) return mat;
        // m = r, n = c
        if (r == m && c == n) return mat;

        var reshapedMatrix = new int[r][];
        for (var i = 0; i < m; i++)
        {
            for (var j = 0; j < n; j++)
            {
                var currIdx = i * n + j + 1;
                var row = (currIdx - 1) / c;
                var col = (currIdx - 1) % c;
                if (reshapedMatrix[row] is null) reshapedMatrix[row] = new int[c];
                reshapedMatrix[row][col] = mat[i][j];
            }
        }
        return reshapedMatrix;
    }
}
