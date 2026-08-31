using System.Text;

// Total 00:10:43 , O(M*N) , O(M)
namespace Csharp.Solutions.S0014
{
    public class Solution
    {
        public Solution()
        {
            var strs = new string[] { "flower", "flow", "flight" };
            this.LongestCommonPrefix(strs);
        }

        public string LongestCommonPrefix(string[] strs)
        {
            var sb = new StringBuilder();
            var i = 0;
            while (true)
            {
                char? anchor = null;
                foreach (var str in strs)
                {
                    if (i >= str.Length) return sb.ToString();
                    if (anchor is null) anchor = str[i];
                    if (anchor != str[i]) return sb.ToString();
                }

                sb.Append(anchor);
                i++;
            }
        }
    }
}