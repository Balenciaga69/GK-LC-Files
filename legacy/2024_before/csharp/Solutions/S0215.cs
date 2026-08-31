namespace Csharp.Solutions
{
    internal class S0215
    {
        internal S0215()
        {
            var nums = new int[] { 3, 2, 1, 5, 6, 4 };
            var k = 2;
            this.FindKthLargest(nums, k);
        }

        public int FindKthLargest(int[] nums, int k)
        {
            var maxHeap = new MaxHeap(nums.Length);
            foreach (var n in nums)
            {
                maxHeap.Insert(n);
            }

            var counter = 0;
            while (true)
            {
                if (++counter == k) return maxHeap.Extract();
                else maxHeap.Extract();
            }
        }

        public class MaxHeap
        {
            private int length;
            private int size;

            private int[] heap;

            public MaxHeap(int length)
            {
                this.length = length;
                this.size = 0;
                this.heap = new int[length + 1]; // idx 0 不使用
            }

            public void Insert(int val)
            {
                if (this.size >= this.length)
                {
                    throw new InvalidOperationException("Heap is full");
                }

                // 塞入末端
                this.size++;
                this.heap[this.size] = val;
                int i = this.size;

                // 當非根基 且比自己老爸還大 則向根基出發
                while (i > 1 && this.heap[i] > this.heap[i / 2])
                {
                    int temp = this.heap[i];
                    this.heap[i] = this.heap[i / 2];
                    this.heap[i / 2] = temp;
                    i = i / 2;
                }
            }

            public int Extract()
            {
                if (this.size < 1) return int.MinValue;

                // 取出根基
                int max = this.heap[1];

                // 拿末端值 扔回根基
                this.heap[1] = this.heap[this.size];
                this.size--;

                // 重新比大小
                this.Heapify(1);

                return max;
            }

            public void Heapify(int i)
            {
                int left = i * 2;
                int right = (i * 2) + 1;
                int minIdx = i;

                // 從 父親、左、右 三個找出最大值
                if (left <= this.size && this.heap[left] > this.heap[minIdx])
                {
                    minIdx = left;
                }

                if (right <= this.size && this.heap[right] > this.heap[minIdx])
                {
                    minIdx = right;
                }

                // 如果最大值不是爸爸 則交換位子
                if (minIdx != i)
                {
                    int temp = this.heap[i];
                    this.heap[i] = this.heap[minIdx];
                    this.heap[minIdx] = temp;
                    this.Heapify(minIdx);
                }
            }
        }
    }
}
