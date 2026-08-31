using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S0168
{
    public class Solution
    {
        public string ConvertToTitle(int columnNumber)
        {
            var result = string.Empty;
            while (columnNumber > 0)
            {
                columnNumber--;
                var moded = columnNumber % 26;
                result = (char)(65 + moded) + result;
                columnNumber /= 26;
            }

            return result;
        }
    }
}