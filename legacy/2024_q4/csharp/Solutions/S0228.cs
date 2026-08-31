namespace Csharp.Solutions.S0228
{
    public class Solution
    {
        public IList<string> SummaryRanges(int[] nums)
        {
            if (nums.Length == 0) return new List<string>();
            int start = nums[0];
            int end = nums[0];
            var result = new List<string>();

            for (int i = 1; i <= nums.Length; i++)
            {
                if (i == nums.Length)
                {
                    var str = end == start ? $"{end}" : $"{start}->{end}";
                    result.Add(str);
                    break;
                }

                if (nums[i] == end + 1)
                {
                    end = nums[i];
                }
                else
                {
                    var str = end == start ? $"{end}" : $"{start}->{end}";
                    result.Add(str);
                    start = end = nums[i];
                }
            }

            return result;
        }
    }
}