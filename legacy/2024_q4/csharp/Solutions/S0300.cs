namespace Csharp.Solutions.S0300
{
    public class Solution
    {
        public Solution()
        {
            var ary = new int[] { 10, 9, 2, 5, 3, 7, 101, 18 };
            this.LengthOfLIS(ary);
        }

        public int LengthOfLIS(int[] nums)
        {
            // 邊界判斷
            var len = nums.Length;
            if (nums.Length < 2) return len;

            int n = nums.Length;
            int[] dp = new int[n]; // nums[i] 結尾的最長遞增子序列的長度
            Array.Fill(dp, 1);
            int maxLength = 1;

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < i; j++)
                {
                    if (nums[j] < nums[i])
                    {
                        dp[i] = Math.Max(dp[i], dp[j] + 1);
                        Console.WriteLine($"{i}-{j} {nums[i]}-{nums[j]}  {dp[i]}");
                    }
                }

                maxLength = Math.Max(maxLength, dp[i]);
            }

            return maxLength;
        }

        private static int[] BinarySearch(int[] nums, int val)
        {
            return nums;
        }
    }
}