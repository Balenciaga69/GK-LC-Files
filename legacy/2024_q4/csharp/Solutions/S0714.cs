namespace Csharp.Solutions.S0714
{
    public class Solution
    {
        public Solution()
        {
            var p = new int[] { 1, 3, 2, 8, 4, 9 };
            var fee = 2;
            this.MaxProfit(p, fee);
        }

        public int MaxProfit(int[] prices, int fee)
        {
            /**
            目標 已實現損益最大化
            持股期間無法再買股／賣出時支付手續費／不能當沖
            */
            var cash = new int[prices.Length];
            var hold = new int[prices.Length];
            hold[0] = -prices[0];
            for (var i = 1; i < prices.Length; i++)
            {
                /**
                昨天的已實現損益 vs 已實現(扣除持股)損益 + 賣出價 - 手續費
                空手 vs 持股今天賣
                */
                cash[i] = Math.Max(cash[i - 1], hold[i - 1] + prices[i] - fee);
                /**
                昨天的已實現(扣除持股)損益 vs 昨天的已實現損益 - 買進價
                不買進 vs 今天進場
                */
                hold[i] = Math.Max(hold[i - 1], cash[i - 1] - prices[i]);
            }

            return cash[cash.Length - 1];
        }
    }
}