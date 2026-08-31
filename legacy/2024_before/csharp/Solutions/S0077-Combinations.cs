namespace Csharp.Solutions
{
    public class S0077_Combinations
    {
        public void Run()
        {
            this.Combine(4, 2);
        }

        public IList<IList<int>> Combine(int n, int k)
        {
            var finalList = new List<IList<int>>();
            Deeper(1, new List<int>());

            void Deeper(int number, IList<int> tempList)
            {
                if (tempList.Count == k)
                {
                    finalList.Add(new List<int>(tempList));
                    return;
                }

                for (int i = number; i <= n; i++)
                {
                    if (n - i + 1 + tempList.Count < k) return;
                    tempList.Add(i);
                    Deeper(i + 1, tempList);
                    tempList.RemoveAt(tempList.Count - 1);
                }
            }

            return finalList;
        }
    }
}
