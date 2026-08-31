using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S0020
{
    public class Solution
    {
        public Solution()
        {
            string v = "()[]{}";
            this.IsValid(v);
        }

        public bool IsValid(string s)
        {
            if (s.Length % 2 != 0) return false;
            var leftStack = new Stack<char>();
            var parenthesesMap = new Dictionary<char, char>
            {
                { ')', '(' },
                { '}', '{' },
                { ']', '[' },
            };

            foreach (var c in s)
            {
                var isRight = parenthesesMap.TryGetValue(c, out var matchLeft);
                if (!isRight)
                {
                    leftStack.Push(c);
                }
                else
                {
                    // 沒有左括弧
                    if (leftStack.Count == 0) return false;
                    if (matchLeft != leftStack.Pop()) return false;
                }
            }

            return !(leftStack.Count > 0);
        }
    }
}