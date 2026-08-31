namespace Csharp.Solutions.S0704;

public class Solution
{
    public Solution()
    {
        var nums = new int[] { -1, 0, 3, 5, 9, 12 };
        var target = 2;
        var result = this.Search(nums, target);
        Console.WriteLine(result);
    }

    public int Search(int[] nums, int target)
    {
        var l = 0;
        var r = nums.Length - 1;

        while (l <= r)
        {
            var m = (l + r) / 2;
            if (nums[m] == target) return m;
            if (nums[m] > target)
            {
                r = m - 1;
            }
            else
            {
                l = m + 1;
            }
        }

        return -1;
    }
}