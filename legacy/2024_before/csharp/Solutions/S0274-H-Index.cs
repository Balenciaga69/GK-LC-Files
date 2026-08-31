using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions
{
    internal class S0274_H_Index
    {
        public S0274_H_Index()
        {
            var citations1 = new int[] { 11, 15 };
            var citations2 = new int[] { 0, 1, 2, 5, 6 };
            var citations3 = new int[] { 100 };
            var citations4 = new int[] { 0, 100 };
            this.HIndex(citations2);
        }

        // 發表過 h 篇 最少被引用 h 次 的 論文 (求最大值)
        public int HIndex(int[] citations)
        {
            int length = citations.Length;
            var counts = new int[length + 1];
            foreach (var c in citations) counts[c > length ? length : c]++; // 如果超出邊界 用長度值

            var total = 0;
            for (int i = length; i >= 0; i--)
            {
                total += counts[i];
                if (total >= i) return i;
            }

            return 0;
        }

        public int HIndexBadWay(int[] citations)
        {
            var paperLength = citations.Length;
            if (paperLength == 0) return 0;
            if (paperLength == 1) return citations[0] == 0 ? 0 : 1;
            var h = 0;
            Array.Sort(citations);
            for (int i = 0; i < paperLength; i++)
            {
                var fulfillCount = paperLength - i;
                var temp = Math.Min(fulfillCount, citations[i]);
                h = Math.Max(h, temp);
            }

            return h;
        }
    }
}