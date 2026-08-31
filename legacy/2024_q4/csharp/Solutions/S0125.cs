namespace Csharp.Solutions.S0125
{
    // 00:11:40 /  /
    public class Solution
    {
        public Solution()
        {
            var str = "0P";
            this.IsPalindrome(str);
        }

        public bool IsPalindrome(string s)
        {
            var left = 0;
            var right = s.Length - 1;
            s = s.ToLower();

            while (left < right)
            {
                while (left < right && !char.IsLetterOrDigit(s[left])) left++;
                while (left < right && !char.IsLetterOrDigit(s[right])) right--;
                if (s[left] != s[right]) return false;
                left++;
                right--;
            }

            return true;
        }
    }
}