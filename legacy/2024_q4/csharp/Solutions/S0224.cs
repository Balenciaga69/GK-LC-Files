namespace Csharp.Solutions.S0224;

public class Solution
{
    public Solution()
    {
        var str = "(10+(4-5+2)-3)+(6+8)";
        this.Calculate(str);
    }

    public int Calculate(string s)
    {
        var stack = new Stack<int>();
        var result = 0;
        var sign = 1;
        var tempVal = 0;
        foreach (var c in s)
        {
            if (char.IsDigit(c))
            {
                var cValue = c - '0';
                tempVal = (tempVal * 10) + cValue;
            }

            if (c == '+')
            {
                result += tempVal * sign;
                tempVal = 0;
                sign = 1;
            }

            if (c == '-')
            {
                result += tempVal * sign;
                tempVal = 0;
                sign = -1;
            }

            if (c == '(')
            {
                stack.Push(result);
                stack.Push(sign);
                result = 0;
                sign = 1;
            }

            if (c == ')')
            {
                result += sign * tempVal;
                tempVal = 0;
                result = result * stack.Pop();
                result = result + stack.Pop();
            }
        }

        result = result + (sign * tempVal);

        return result;
    }
}