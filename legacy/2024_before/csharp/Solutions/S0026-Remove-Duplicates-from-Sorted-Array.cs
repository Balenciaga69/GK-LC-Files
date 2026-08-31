namespace Csharp.Solutions
{
    internal class S0026_Remove_Duplicates_from_Sorted_Array
    {
        public S0026_Remove_Duplicates_from_Sorted_Array()
        {
            var nums = new int[] { 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 };
            this.RemoveDuplicates(nums);
        }

        public int RemoveDuplicates(int[] nums)
        {
            if (nums.Length < 2) return nums.Length; // 如果 ary.length = 1 or 0
            var slow = 0;
            for (int fast = 1; fast < nums.Length; fast++)
            {
                if (nums[fast] > nums[slow])
                {
                    slow++;
                    nums[slow] = nums[fast];
                }
            }

            return slow + 1;
        }
    }
}
