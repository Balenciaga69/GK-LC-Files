namespace Csharp.Solutions.S3396
{
    public class Solution
    {
        public int MinimumOperations(int[] nums)
        {
            var dict = new Dictionary<int, int>();
            var duplicatedSet = new HashSet<int>();
            foreach (var x in nums)
            {
                var isContained = dict.TryGetValue(x, out var times);
                if (isContained) dict[x]++;
                else dict.Add(x, 1);
                if (dict[x] > 1 && !duplicatedSet.Contains(x)) duplicatedSet.Add(x);
            }

            if (duplicatedSet.Count == 0) return 0;
            var idx = 0;
            var deleteTimes = 0;
            while (true)
            {
                deleteTimes++;
                for (var i = 1; i <= 3; i++)
                {
                    if (idx == nums.Length) return deleteTimes;
                    var n = nums[idx++];
                    dict[n]--;
                    if (dict[n] < 2) duplicatedSet.Remove(n);
                    if (duplicatedSet.Count == 0) return deleteTimes;
                }
            }
        }
    }
}