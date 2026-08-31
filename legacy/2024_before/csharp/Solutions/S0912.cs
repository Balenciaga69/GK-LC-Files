namespace Csharp.Solutions
{
    internal class S0912
    {
        public S0912()
        {
            var nums = new int[] { 38, 27, 43, 3, 9, 82, 10 };
            SortArray(nums);
        }

        public int[] SortArray(int[] nums)
        {
            this.MergeSortVersion(nums);
            return nums;
        }

        private int[] MergeSortVersion(int[] nums)
        {
            void Recursion(int start, int end)
            {
                if (start >= end) return; // 代表 不能再分割了
                var mid = (start + end) / 2;
                Recursion(start, mid); // left and mid
                Recursion(mid + 1, end); // right
                MergeHelper(start, end, mid);
            }

            void MergeHelper(int leftStart, int rightEnd, int splitPoint)
            {
                var lAryLength = splitPoint - leftStart + 1; // 左陣列長度
                var rAryLength = rightEnd - splitPoint; // 右陣列長度
                var lAry = new int[lAryLength];
                var rAry = new int[rAryLength];
                Array.Copy(nums, leftStart, lAry, 0, lAryLength);
                Array.Copy(nums, splitPoint + 1, rAry, 0, rAryLength);
                var lIdx = 0;
                var rIdx = 0;
                var nIdx = leftStart;
                while (lIdx < lAryLength && rIdx < rAryLength)
                {
                    if (lAry[lIdx] < rAry[rIdx])
                    {
                        nums[nIdx] = lAry[lIdx];
                        lIdx++;
                    }
                    else
                    {
                        nums[nIdx] = rAry[rIdx];
                        rIdx++;
                    }

                    nIdx++;
                }

                while (lIdx < lAryLength)
                {
                    nums[nIdx] = lAry[lIdx];
                    lIdx++;
                    nIdx++;
                }

                while (rIdx < rAryLength)
                {
                    nums[nIdx] = rAry[rIdx];
                    rIdx++;
                    nIdx++;
                }
            }

            // execute
            Recursion(0, nums.Length - 1);
            return nums;
        }
    }
}
