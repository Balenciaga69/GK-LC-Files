namespace Csharp.Solutions.S0718
{
    public class Solution
    {
        public Solution()
        {
            var ary1 = new int[] { 1, 2, 3, 2, 1 };
            var ary2 = new int[] { 4, 3, 2, 1, 7 };

            this.FindLength(ary1, ary2);
        }

        public int FindLength(int[] nums1, int[] nums2)
        {
            if (nums1.Length == 0 || nums2.Length == 0) return 0;
            if (nums1.SequenceEqual(nums2)) return nums1.Length;
            return this.DPMethod(nums1, nums2);
        }

        public int DPMethod(int[] nums1, int[] nums2)
        {
            var (n, m) = (nums1.Length, nums2.Length);
            var dp = new int[n, m]; // 同時記錄 num1/2
            var dpForNum2 = new int[m]; // 只記錄 num2 - 無用途
            var result = 0;
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < m; j++)
                {
                    if (nums1[i] != nums2[j]) continue;
                    dp[i, j] = 1 + (i > 0 && j > 0 ? dp[i - 1, j - 1] : 0);
                    dpForNum2[j] = 1 + (j > 0 ? dpForNum2[j - 1] : 0);
                    result = Math.Max(result, dp[i, j]);
                }
            }

            return result;
        }

        public int DPMethodRevserve(int[] nums1, int[] nums2)
        {
            var dp = new int[nums1.Length + 1, nums2.Length + 1];
            var result = 0;
            for (int i = nums1.Length - 1; i >= 0; i--)
            {
                for (int j = nums2.Length - 1; j >= 0; j--)
                {
                    if (nums1[i] == nums2[j])
                    {
                        dp[i, j] = dp[i + 1, j + 1] + 1;
                        result = Math.Max(result, dp[i, j]);
                    }
                }
            }

            return result;
        }
    }
}