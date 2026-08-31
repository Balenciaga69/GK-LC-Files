using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S1657
{
    public class Solution
    {
        public Solution()
        {
            var word1 = "abbzccca";
            var word2 = "babzzczc";
            this.CloseStrings(word1, word2);
        }

        public bool CloseStrings(string word1, string word2)
        {
            /**
             觀察: 字數不相等無效、字母順序不重要、個別字母出現次數重要
             */
            if (word1.Length != word2.Length) return false;
            var w1Dict = this.WordToDict(word1);
            var w2Dict = this.WordToDict(word2);

            var values1 = w1Dict.Values.ToArray();
            var values2 = w2Dict.Values.ToArray();
            Array.Sort(values1);
            Array.Sort(values2);

            // 檢查不重複字母是否匹配
            if (!w1Dict.Keys.ToHashSet().SetEquals(w2Dict.Keys.ToHashSet())) return false;

            // 出現頻率不匹配
            for (var i = 0; i < values1.Length; i++)
            {
                if (values1[i] != values2[i]) return false;
            }

            return true;
        }

        private Dictionary<char, int> WordToDict(string word)
        {
            var dict = new Dictionary<char, int>();
            foreach (var c in word)
            {
                dict.TryGetValue(c, out var count);
                dict[c] = count + 1;
            }

            return dict;
        }
    }
}