namespace Csharp.Solutions.S0290;
public class Solution
{
    public Solution()
    {
        var pattern = "abba";
        var s = "dog cat cat dog";
        this.WordPattern(pattern, s);
    }

    public bool WordPattern(string pattern, string s)
    {
        // 比對哈希表
        Dictionary<char, string> charToWordMap = new ();
        HashSet<string> usedWordsSet = new ();

        // 被拆開的 string
        string[] words = s.Split(' ');

        // 判別 patterns 與 words 數量是否相等
        if (words.Length != pattern.Length) return false;

        // 單字數量
        var len = pattern.Length;

        for (int i = 0; i < len; i++)
        {
            var currWord = words[i];
            var key = pattern[i];
            if (charToWordMap.ContainsKey(key))
            {
                var existedWord = charToWordMap[key];
                if (existedWord != currWord)
                    return false;
            }
            else
            {
                if (usedWordsSet.Contains(currWord))
                    return false;
                charToWordMap[key] = currWord;
                usedWordsSet.Add(currWord);
            }
        }

        return true;
    }
}