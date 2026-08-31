// https://leetcode.com/problems/house-robber/

namespace Shared.Solutions;

public partial class Solution
{
    public int Rob_0198(int[] nums)
    {
        var n = nums.Length;

        // edge
        if (n == 0) return 0;

        var dp = new int[n];
        for (int i = 0; i < n; i++)
        {
            if (i == 0)
            {
                dp[0] = nums[i];
            }
            else if (i == 1)
            {
                dp[1] = Math.Max(dp[0], nums[1]);
            }
            else
            {
                dp[i] = Math.Max(dp[i - 1], dp[i - 2] + nums[i]);
            }
        }
        return dp[n - 1];
    }
}
