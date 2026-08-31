namespace Csharp.Solutions
{
    internal class S0200_Number_Of_Islands
    {
        public void Run()
        {
            char[][] grid1 =
            {
            new[] { '1', '1', '1', '1', '0' },
            new[] { '1', '1', '0', '1', '0' },
            new[] { '1', '1', '0', '0', '0' },
            new[] { '0', '0', '0', '0', '0' },
            };

            char[][] grid2 =
            {
            new[] { '1', '1', '0', '0', '0' },
            new[] { '1', '1', '0', '0', '0' },
            new[] { '0', '0', '1', '0', '0' },
            new[] { '0', '0', '0', '1', '1' },
            };

            this.NumIslands(grid2);
        }

        public int NumIslands(char[][] grid)
        {
            void Dfs(int i, int j)
            {
                if (grid[i][j] != '1') return; // 已被探索 或是 海上
                grid[i][j] = (char)(grid[i][j] + 1);
                if (i + 1 < grid.Length) Dfs(i + 1, j);
                if (i > 0) Dfs(i - 1, j);
                if (j + 1 < grid[0].Length) Dfs(i, j + 1);
                if (j > 0) Dfs(i, j - 1);
            }

            var islands = 0;

            for (int i = 0; i < grid.Length; i++)
            {
                for (int j = 0; j < grid[i].Length; j++)
                {
                    if (grid[i][j] != '1') continue;
                    Dfs(i, j);
                    islands++;
                }
            }

            return islands;
        }
    }
}
