namespace Csharp.Solutions
{
    public class S0053_Maximum_Subarray
    {
        public void Run()
        {
            var numbers = new int[] { -2, 1, -3, 4, -1, 2, 1, -5, 4 };
            this.MaxSubArray(numbers);
        }

        public int MaxSubArray(int[] nums)
        {
            int max = nums[0];
            int curr = max;
            for (int i = 1; i < nums.Length; i++)
            {
                // 如果 當前累計已經是負數 且 現在這個數字直接比 累計還大 改用他當起點
                if (nums[i] > curr && curr < 0) curr = 0;
                curr += nums[i];
                max = Math.Max(max, curr);
            }

            return max;
        }
    }
}
