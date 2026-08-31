using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S0155
{
    public class Solution
    {
        public Solution()
        {
            var m = new MinStack();
            m.Push(1);
            m.Push(2);
            m.Push(1);
        }
    }

    public class MinStack
    {
        private List<int> stack = new List<int>();
        private List<int> minStack = new List<int>();

        public MinStack()
        {
        }

        public void Push(int val)
        {
            this.minStack.Add(this.minStack.Count == 0 ? val : Math.Min(this.minStack.Last(), val));
            this.stack.Add(val);
        }

        public void Pop()
        {
            this.minStack.RemoveAt(this.minStack.Count - 1);
            this.stack.RemoveAt(this.stack.Count - 1);
        }

        public int Top()
        {
            return this.stack.Last();
        }

        public int GetMin()
        {
            return this.minStack.Last();
        }
    }
}