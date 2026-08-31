using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S1137
{
    public class Solution
    {
        public Solution()
        {
            this.Tribonacci(4);
        }

        public int Tribonacci(int n)
        {
            if (n == 0) return 0;
            if (n == 1) return 1;
            if (n == 2) return 1;

            var t_3 = 0;
            var t_2 = 1;
            var t_1 = 1;

            for (var i = 3; i <= n; i++)
            {
                // 雖然這樣做會占用空間 但可讀性更強
                var tempT2 = t_2;
                var tempT1 = t_1;
                t_1 = t_3 + t_2 + t_1;
                t_2 = tempT1;
                t_3 = tempT2;
            }

            return t_1;
        }
    }
}