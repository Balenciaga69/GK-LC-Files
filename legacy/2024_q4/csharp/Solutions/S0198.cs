using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Intrinsics.Arm;
using System.Text;
using System.Threading.Tasks;
/**
 題目背景： 你是一個專業的盜賊，打算在一條街道上打劫一系列的房屋。
每個房屋裡都有一筆錢，但有一個限制：
相鄰的兩個房屋有警報系統相連，如果兩個相鄰的房屋被同時打劫，警報會被觸發並聯繫警察。
因此，你不能在兩個相鄰的房屋中同時打劫。

給定一個整數數組 nums，表示每個房屋中的金額，
請你返回在不觸發警報的情況下，能打劫的最大金額。
 */
namespace Csharp.Solutions.S0198
{
    public class Solution
    {
        public Solution()
        {
            var houses = new int[] { 2, 7, 9, 3, 1 };
            this.Rob(houses);
        }

        public int Rob(int[] nums)
        {
            if (nums.Length == 0) return 0;
            if (nums.Length == 1) return nums[0];

            var dp = new int[nums.Length];
            dp[0] = nums[0];
            dp[1] = Math.Max(nums[1], nums[0]);
            for (var i = 2; i < nums.Length; i++)
            {
                dp[i] = Math.Max(dp[i - 1], dp[i - 2] + nums[i]);
            }

            return dp.Last();
        }
    }
}