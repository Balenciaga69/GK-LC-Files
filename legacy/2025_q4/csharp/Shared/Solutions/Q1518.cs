namespace Shared.Solutions;

public partial class Solution
{
    public int NumWaterBottles(int numBottles, int numExchange)
    {
        return numBottles + (numBottles - 1) / (numExchange - 1);
    }
}
