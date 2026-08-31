namespace Csharp.Solutions.S0344
{
    public class Solution
    {
        public Solution()
        {
            var ary = new char[] { 'h', 'e', 'l', 'l', 'o' };
            this.ReverseString(ary);
        }

        public void ReverseString(char[] s)
        {
            var left = 0;
            var right = s.Length - 1;
            while (left < right)
            {
                (s[left], s[right]) = (s[right], s[left]);
                left++;
                right--;
            }
        }
    }
}