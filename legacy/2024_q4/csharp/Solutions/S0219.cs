namespace Csharp.Solutions.S0219
{
    public class Solution
    {
        public bool ContainsNearbyDuplicate(int[] nums, int k)
        {
            var map = new Dictionary<int, int>();
            for (var i = 0; i < nums.Length; i++)
            {
                if (map.ContainsKey(nums[i]))
                {
                    var isSuccess = i - map[nums[i]] <= k;
                    if (isSuccess) return true;
                }

                map[nums[i]] = i;
            }

            return false;
        }
    }
}