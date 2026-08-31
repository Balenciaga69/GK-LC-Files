using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions.S0424
{
    public class Solution
    {
        public int CharacterReplacement(string s, int k)
        {
            int[] alphabet = new int[26]; // 儲存每個字母的頻率
            int l = 0, r = 0; // 左右指針
            int maxFreq = 0; // 目前窗口中字母最大頻率
            int maxLen = 0; // 最長的有效字串長度

            while (r < s.Length)
            {
                // 更新當前字母頻率
                alphabet[s[r] - 'A']++;
                maxFreq = Math.Max(maxFreq, alphabet[s[r] - 'A']);

                // 檢查是否需要縮小窗口 不能再替換了
                var othersSum = (r - l + 1) - maxFreq;
                if (othersSum > k)
                {
                    alphabet[s[l] - 'A']--; // 移出左邊字母
                    l++; // 縮小窗口
                }

                // 計算目前有效的窗口長度
                maxLen = Math.Max(maxLen, r - l + 1);
                r++; // 擴展右窗口
            }

            return maxLen;
        }
    }
}