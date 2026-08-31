namespace Shared.Solutions;

public partial class Solution
{
    public void SetZeroes(int[][] matrix)
    {
        var mSet = new HashSet<int>();
        var nSet = new HashSet<int>();
        for (int i = 0; i < matrix.Length; i++)
        {
            for (int j = 0; j < matrix[i].Length; j++)
            {
                if (matrix[i][j] == 0)
                {
                    mSet.Add(i);
                    nSet.Add(j);
                }
            }
        }

        for (int i = 0; i < matrix.Length; i++)
        {
            for (int j = 0; j < matrix[i].Length; j++)
            {
                if (mSet.Contains(i) || nSet.Contains(j))
                {
                    matrix[i][j] = 0;
                }
            }
        }
    }
}
