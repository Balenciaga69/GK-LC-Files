namespace Shared.Solutions;

public partial class Solution
{
    public int Rob(int[] nums)
    {
        int ExecuteTheRobbery(int[] nums)
        {
            var n = nums.Length;
            if (n == 0)
                return 0;

            if (n == 1)
                return nums[0];
            var dp = new int[n];
            dp[0] = nums[0];
            dp[1] = Math.Max(nums[0], nums[1]);
            for (int i = 2; i < n; i++)
            {
                dp[i] = Math.Max(dp[i - 1], dp[i - 2] + nums[i]);
            }
            return dp.Last();
        }
        var n = nums.Length;
        if (n == 0)
            return 0;
        if (n == 1)
            return nums[0];
        var rob1 = ExecuteTheRobbery(nums.Skip(1).ToArray());
        var rob2 = ExecuteTheRobbery(nums.Take(n - 1).ToArray());
        return Math.Max(rob1, rob2);
    }
}
