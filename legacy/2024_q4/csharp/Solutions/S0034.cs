using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S0034;

public class Solution
{
    public Solution()
    {
        var nums = new int[] { 5, 7, 8, 8, 8, 8, 8, 9 };
        this.SearchRange(nums, 8);
    }

    public int[] SearchRange(int[] nums, int target)
    {
        var l = 0;
        var r = nums.Length - 1;
        var pivot = -1;
        while (l <= r)
        {
            var m = (l + r) / 2;
            if (nums[m] == target)
            {
                pivot = m;
                break;
            }

            if (nums[m] > target) r = m - 1;
            else l = m + 1;
        }

        if (pivot == -1) return new[] { -1, -1 };
        var maxIdx = FindMaxIdx(nums, target, pivot, pivot, nums.Length - 1);
        var minIdx = FindMinIdx(nums, target, pivot, 0, pivot);
        return new int[] { minIdx, maxIdx };
    }

    private static int FindMinIdx(int[] nums, int target, int minIdx, int l, int r)
    {
        while (l <= r)
        {
            var m = (l + r) / 2;
            if (nums[m] == target)
            {
                minIdx = m;
                r = m - 1;
                continue;
            }

            if (nums[m] > target) r = m - 1;
            else l = m + 1;
        }

        return minIdx;
    }

    private static int FindMaxIdx(int[] nums, int target, int maxIdx, int l, int r)
    {
        while (l <= r)
        {
            var m = (l + r) / 2;
            if (nums[m] == target)
            {
                maxIdx = m;
                l = m + 1;
                continue;
            }

            if (nums[m] > target) r = m - 1;
            else l = m + 1;
        }

        return maxIdx;
    }

}