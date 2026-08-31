namespace Csharp.Solutions
{
    public class S0020_Valid_Parentheses
    {
        public bool IsValid(string str)
        {
            char[] left = new char[] { '(', '[', '{' };
            char[] right = new char[] { ')', ']', '}' };
            Stack<char> stack = new Stack<char>();
            for (int i = 0; i < str.Length; i++)
            {
                char curr = str[i];
                bool isInLeft = left.Contains(curr);
                if (isInLeft)
                {
                    stack.Push(curr);
                }
                else
                {
                    if (stack.Count == 0)
                    {
                        return false;
                    }

                    int rightIdx = Array.IndexOf(right, curr);
                    var peekLeft = stack.Peek();
                    if (peekLeft != left[rightIdx])
                    {
                        return false;
                    }
                    else
                    {
                        stack.Pop();
                    }
                }
            }

            return stack.Count == 0;
        }
    }
}