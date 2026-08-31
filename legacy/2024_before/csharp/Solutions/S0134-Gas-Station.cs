namespace Csharp.Solutions
{
    public class S0134_Gas_Station
    {
        public void Execute()
        {
            var gas = new int[] { 0, 0, 0, 2, 13 };

            // var gas = new int[] { 1, 2, 3, 4, 5 };
            var cost = new int[] { 3, 4, 5, 1, 2 };
            var ans = this.CanCompleteCircuit(gas, cost);
            Console.WriteLine(ans);
        }

        public int CanCompleteCircuit(int[] gas, int[] cost)
        {
            // 總油耗大於加油量 直接 -1
            if (cost.Sum() > gas.Sum()) return -1;
            var tank = 0;
            var start = 0;
            for (int i = 0; i < gas.Length; i++)
            {
                // 剩餘油量 = 加油 - 到達下一站所需的消耗
                tank = tank + gas[i] - cost[i];
                if (tank < 0)
                {
                    start = i + 1;
                    tank = 0;
                    continue;
                }
            }

            // 當 燃料足夠的時候 總體一定能夠支撐整個旅程的油耗
            return start;
        }
    }
}
