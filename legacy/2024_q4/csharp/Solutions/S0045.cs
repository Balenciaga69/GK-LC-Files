namespace Csharp.Solutions.S0045
{
    public class Solution
    {
        public Solution()
        {
            var nums1 = new int[] { 1, 3, 2 };
            var nums2 = new int[] { 2, 1 };
            var nums3 = new int[] { 2, 1, 2, 1, 4 };
            var nums4 = new int[] { 999 };
            this.Jump(nums3);
        }

        public int Jump(int[] nums)
        {
            return this.JumpWithDP(nums);
        }

        private int JumpWithDP(int[] nums)
        {
            // 到達 i 的最小跳躍次數
            var dp = Enumerable.Repeat(int.MaxValue, nums.Length).ToArray();
            dp[0] = 0;

            // 走訪後續每個一格子
            for (var i = 0; i < nums.Length; i++)
            {
                for (var j = 1; j <= nums[i]; j++)
                {
                    // 超出邊界不計算
                    if (i + j >= nums.Length) break;
                    dp[i + j] = Math.Min(dp[i + j], dp[i] + 1);
                }
            }

            return dp[dp.Length - 1];
        }

        private int JumpWithGreed(int[] nums)
        {
            // 總長度,跳躍次數統計、當前可到達最遠座標、上一個格子最遠座標
            int len = nums.Length, times = 0, currFarthest = 0, lastFarthest = 0;
            for (var i = 0; i < len - 1; i++)
            {
                currFarthest = Math.Max(currFarthest, nums[i] + i);
                if (lastFarthest == i)
                {
                    times++;
                    lastFarthest = currFarthest;
                    if (currFarthest >= len - 1) return times;
                }
            }

            return times;
        }

        private int JumpWithMySoultion(int[] nums)
        {
            if (nums.Length == 0) return 0;
            var times = 0;
            var currIdx = 0;
            var endIdx = nums.Length - 1;
            while (currIdx < endIdx)
            {
                if (currIdx + nums[currIdx] >= endIdx) return ++times;

                // 可以到達更遠目的地的範圍內座標
                var farIdx = -1;
                for (var i = 1; i <= nums[currIdx]; i++)
                {
                    if (farIdx == -1)
                    {
                        farIdx = currIdx + i;
                    }
                    else
                    {
                        var farLen = nums[farIdx] + farIdx;
                        var iLen = nums[currIdx + i] + currIdx + i;
                        farIdx = iLen > farLen ? currIdx + i : farIdx;
                    }
                }

                times++;
                currIdx = farIdx;
            }

            return times;
        }
    }
}