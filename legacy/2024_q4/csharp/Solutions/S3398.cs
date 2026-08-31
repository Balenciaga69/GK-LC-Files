namespace Csharp.Solutions.S3398
{
    public class Solution
    {
        public int MaxDistinctElements(int[] nums, int k)
        {
            // 選最小 且沒人選過的數字
            Array.Sort(nums);
            var set = new HashSet<int>();
            var nextStart = int.MinValue;

            for (int i = 0; i < nums.Length; i++)
            {
                var n = nums[i];

                // 不做重複無謂的計算
                var start = Math.Max(n - k, nextStart);
                for (int val = start; val <= n + k; val++)
                {
                    if (!set.Contains(val))
                    {
                        set.Add(val);
                        nextStart = val + 1;
                        break;
                    }
                }
            }

            return set.Count;
        }
    }
}