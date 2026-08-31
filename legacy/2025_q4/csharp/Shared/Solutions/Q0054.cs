namespace Shared.Solutions;

public partial class Solution
{
    public IList<int> SpiralOrder(int[][] matrix)
    {
        if (matrix == null || matrix.Length == 0 || matrix[0].Length == 0)
        {
            return new List<int>();
        }

        int rows = matrix.Length;
        int cols = matrix[0].Length;
        var result = new List<int>(rows * cols);

        int top = 0;
        int bottom = rows - 1;
        int left = 0;
        int right = cols - 1;

        while (top <= bottom && left <= right)
        {
            int c1 = left;
            while (c1 <= right)
            {
                result.Add(matrix[top][c1]);
                c1++;
            }
            top++;

            if (top > bottom)
                break;

            int r2 = top;
            while (r2 <= bottom)
            {
                result.Add(matrix[r2][right]);
                r2++;
            }
            right--;

            if (left > right)
                break;

            int c3 = right;
            while (c3 >= left)
            {
                result.Add(matrix[bottom][c3]);
                c3--;
            }
            bottom--;

            int r4 = bottom;
            while (r4 >= top)
            {
                result.Add(matrix[r4][left]);
                r4--;
            }
            left++;
        }

        return result;
    }
}
