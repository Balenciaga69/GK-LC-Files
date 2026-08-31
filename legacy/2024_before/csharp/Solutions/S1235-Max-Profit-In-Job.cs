namespace Csharp.Solutions
{
    internal class S1235_Max_Profit_In_Job
    {
        public S1235_Max_Profit_In_Job()
        {
            var startTime = new int[] { 1, 2, 3, 4, 6 };
            var endTime = new int[] { 3, 5, 10, 6, 9 };
            var profit = new int[] { 20, 20, 100, 70, 60 };
            this.JobScheduling(startTime, endTime, profit);
        }

        public int JobScheduling(int[] startTime, int[] endTime, int[] profit)
        {
            // TODO: 還沒完成
            var max = 0;
            Array.Sort(endTime);

            return max;
        }
    }
}
