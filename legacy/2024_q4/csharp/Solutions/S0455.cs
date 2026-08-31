// Easy: Assign Cookies
namespace Csharp.Solutions.S0455
{
    public class Solution
    {
        public Solution()
        {
            int[] g = { 3, 2, 1 };
            int[] s = { 1, 1 };
            this.FindContentChildren(g, s);
        }

        public int FindContentChildren(int[] g, int[] s)
        {
            var contentBoys = 0;
            var gPointer = 0;
            var sPointer = 0;
            Array.Sort(g);
            Array.Sort(s);
            while (gPointer < g.Length && sPointer < s.Length)
            {
                var currG = g[gPointer];
                var currS = s[sPointer];

                // Child is content.
                if (currS >= currG)
                {
                    contentBoys++;
                    gPointer++;
                    sPointer++;
                }

                // Child isn't Content.
                else
                {
                    sPointer++;
                }
            }

            return contentBoys;
        }
    }
}