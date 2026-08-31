namespace Csharp.Solutions
{
    public class S0014_Longest_Common_Prefix
    {
        public string LongestCommonPrefix(string[] strings)
        {
            // 空數組 直接結束
            if (strings is null || strings.Length == 0) return string.Empty;

            var i = 0; // 同步指針
            var atLeastOneFlag = false; // 保證至少有被修改過一次
            while (true)
            {
                // i 超出指標 則 '~' (表示超出範圍) 否則取出 s[i]
                var allChar = strings.Select(str => i >= str.Length ? '~' : str[i]);

                // 該字串沒有超出長度 且 大家都跟strings[0][i]的char一樣
                var isSame = allChar.All(c => c != '~' && c == allChar.First());
                if (!isSame) break; // 不是最長前綴了 離開Loop

                i++;
                atLeastOneFlag = true;
            }

            return atLeastOneFlag ? strings[0].Substring(0, i) : string.Empty;
        }
    }
}