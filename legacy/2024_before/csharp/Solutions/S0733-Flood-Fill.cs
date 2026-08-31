namespace Csharp.Solutions
{
    public class S0733_Flood_Fill
    {
        public void Run()
        {
            int[][] image = new int[][] { new int[] { 1, 1, 1 }, new int[] { 1, 1, 0 }, new int[] { 1, 0, 1 }, };
            var reslut = this.FloodFillBFS(image, 1, 1, 2);
            var reslut2 = this.FloodFillDFS(image, 1, 1, 2);
        }

        public int[][] FloodFillBFS(int[][] image, int sr, int sc, int color)
        {
            int m = image.Length;
            int n = image[0].Length;
            int oldColor = image[sr][sc];

            var quque = new Queue<(int, int)>();
            var visited = new HashSet<(int, int)>();

            // 判別是否該走訪該節點
            bool ShouldVisit(int x, int y, int m, int n, int oldColor, int[][] image, HashSet<(int, int)> visited)
            {
                bool isInImage = x < m && y < n && x >= 0 && y >= 0;

                // 是否還在圖片內 且 尚未被走訪 且 是指定顏色
                return isInImage && !visited.Contains((x, y)) && image[x][y] == oldColor;
            }

            quque.Enqueue((sr, sc));
            visited.Add((sr, sc));

            while (quque.Count > 0)
            {
                var (x, y) = quque.Dequeue();
                image[x][y] = color;

                // 向右
                if (ShouldVisit(x + 1, y, m, n, oldColor, image, visited))
                {
                    quque.Enqueue((x + 1, y));
                    visited.Add((x + 1, y));
                }

                // 向左
                if (ShouldVisit(x - 1, y, m, n, oldColor, image, visited))
                {
                    quque.Enqueue((x - 1, y));
                    visited.Add((x - 1, y));
                }

                // 向上
                if (ShouldVisit(x, y - 1, m, n, oldColor, image, visited))
                {
                    quque.Enqueue((x, y - 1));
                    visited.Add((x, y - 1));
                }

                // 向下
                if (ShouldVisit(x, y + 1, m, n, oldColor, image, visited))
                {
                    quque.Enqueue((x, y + 1));
                    visited.Add((x, y + 1));
                }
            }

            return image;
        }

        public int[][] FloodFillDFS(int[][] image, int sr, int sc, int color)
        {
            int oldColor = image[sr][sc];
            int m = image.Length - 1;
            int n = image[0].Length - 1;
            void DFS(int x, int y)
            {
                if (x < 0 || y < 0 || x > m || y > n || image[x][y] != oldColor)
                {
                    return;
                }

                image[x][y] = color;
                DFS(x + 1, y);
                DFS(x - 1, y);
                DFS(x, y + 1);
                DFS(x, y - 1);
            }

            if (image[sr][sc] != color)
            {
                DFS(sr, sc);
            }

            return image;
        }
    }
}
