// Medium: Reorder Data in Log Files
using static System.Net.Mime.MediaTypeNames;

namespace Csharp.Solutions.S0937
{
    public class Solution
    {
        public Solution()
        {
            string[] strings =
            [
                "6p tzwmh ige mc",
                "ns 566543603829",
                "ubd cujg j d yf",
                "ha6 1 938 376 5",
                "3yx 97 666 56 5",
                "d 84 34353 2249",
                "0 tllgmf qp znc",
                "s 1088746413789",
                "ys0 splqqxoflgx",
                "uhb rfrwt qzx r",
                "u lrvmdt ykmox",
                "ah4 4209164350",
                "rap 7729 8 125",
                "4 nivgc qo z i",
                "apx 814023338 8"
            ];

            this.ReorderLogFiles(strings);
        }

        public string[] ReorderLogFiles(string[] logs)
        {
            if (logs.Length == 0) return logs;

            var latterList = new List<string>();
            var digitList = new List<string>();
            foreach (var log in logs)
            {
                var isNumber = char.IsDigit(log.Split(" ")[1][0]);
                if (isNumber)
                {
                    digitList.Add(log);
                }
                else
                {
                    latterList.Add(log);
                }
            }

            latterList.Sort((a, b) =>
            {
                var aParts = a.Split(" ", 2);
                var bParts = b.Split(" ", 2);
                var comparison = aParts[1].CompareTo(bParts[1]);
                if (comparison == 0) return aParts[0].CompareTo(bParts[0]);
                return comparison;
            });

            string[] result = new string[logs.Length];
            latterList.CopyTo(result, 0);
            digitList.CopyTo(result, latterList.Count);
            return result;
        }
    }
}