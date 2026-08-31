using System.Text;

namespace Csharp.Solutions.S0179
{
    public class Solution
    {
        public Solution()
        {
            var nums = new int[] { 3, 30, 34, 5 };
            this.LargestNumber(nums);
        }

        public string LargestNumber(int[] nums)
        {
            var sb = new StringBuilder();
            Array.Sort(nums, (a, b) =>
            {
                var (strA, strB) = (a.ToString(), b.ToString());
                return (strB + strA).CompareTo(strA + strB);
            });

            // 例外狀況
            if (nums[0] == 0) return "0";

            foreach (var num in nums) sb.Append(num.ToString());
            return sb.ToString();
        }
    }
}