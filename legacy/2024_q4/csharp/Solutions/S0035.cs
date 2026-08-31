using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S0035
{
    public class Solution
    {
        public int SearchInsert(int[] nums, int target)
        {
            if (target > nums[nums.Length - 1]) return nums.Length;
            if (target < nums[0]) return 0;

            int start = 0;
            int end = nums.Length - 1;

            while (start < end)
            {
                var pivot = (start + end) / 2;
                if (nums[pivot] == target) return pivot;
                else if (nums[pivot] > target) end = pivot;
                else start = pivot + 1;
            }

            return end;
        }
    }
}