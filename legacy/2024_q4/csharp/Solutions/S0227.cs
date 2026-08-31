using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S0227
{
    public class Solution
    {
        public Solution()
        {
            var str = "1-1+1";
            var strX = "10 - 20/2 -  4*2";
            this.Calculate(strX);
        }

        public int Calculate(string str)
        {
            var result = 0;
            var opMap = new Dictionary<char, int>();
            opMap.Add('+', 1);
            opMap.Add('-', 1);
            opMap.Add('*', 2);
            opMap.Add('/', 2);

            var numStr = string.Empty;
            var operatorStack = new Stack<char>();
            var numberStack = new Stack<int>();

            for (int i = 0; i < str.Length; i++)
            {
                char ch = str[i];

                // 是數字
                if (char.IsDigit(ch)) numStr += ch;

                // 是無用字符
                if (ch == ' ') continue;

                if (opMap.ContainsKey(ch))
                {
                    numberStack.Push(Convert.ToInt32(numStr));
                    numStr = string.Empty;
                    if (operatorStack.Count > 0) CalcPrevValue();
                    operatorStack.Push(ch);
                }
            }

            numberStack.Push(Convert.ToInt32(numStr));
            numStr = string.Empty;

            while (numberStack.Count > 1)
            {
                if (operatorStack.Count > 0) CalcPrevValue();
                else numberStack.Push(numberStack.Pop() + numberStack.Pop());
            }

            return numberStack.Pop();

            void CalcPrevValue()
            {
                var prevOperator = operatorStack.Pop();
                if (prevOperator == '-')
                {
                    var prevNumber = numberStack.Pop();
                    numberStack.Push(-prevNumber);
                }

                if (prevOperator == '*' || prevOperator == '/')
                {
                    var right = numberStack.Pop();
                    var left = numberStack.Pop();
                    var newVal = prevOperator == '*' ? left * right : left / right;
                    numberStack.Push(newVal);
                }
            }
        }
    }
}