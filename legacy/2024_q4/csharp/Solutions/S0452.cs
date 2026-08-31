/**
 題目：452. 最少箭數來爆破氣球 (Minimum Number of Arrows to Burst Balloons)
題目難度：中等
題目描述：
有一些氣球被黏貼在平坦的牆壁上，這牆壁代表的是 XY 平面。
這些氣球用一個二維整數陣列 points 表示，其中 points[i] = [xstart, xend] 表示一個氣球的水平方向直徑，
這個直徑的範圍是從 xstart 到 xend。氣球的具體高度（y座標）你是不知道的。
你可以在 x 軸的不同位置發射箭矢，並且箭矢是垂直向上的（向 y 軸正方向發射）。
如果氣球的 xstart 和 xend 之間有某個 x 值，這個箭矢就可以穿過並爆破這個氣球（也就是 xstart <= x <= xend）。
箭矢一旦發射，就會無限向上飛，並爆破它路徑上的所有氣球。
現在，給定這個 points 陣列，請你返回至少需要發射幾支箭才能爆破所有的氣球。
Example 1:
Input: points = [[1,6],[2,8],[7,12],[10,16]]
Output: 2

Example 2:
Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
 */
namespace Csharp.Solutions.S0452
{
    public class Solution
    {
        // 雖然代碼寫得很醜，但能初步表達邏輯
        public int FindMinArrowShots(int[][] points)
        {
            var count = 0;
            var lastEnd = 0;
            Array.Sort(points, (a, b) => a[1].CompareTo(b[1]));

            foreach (var ballon in points)
            {
                // 第一顆氣球
                if (count == 0)
                {
                    count++;
                    lastEnd = ballon[1];
                    continue;
                }

                // 氣球被射穿了
                if (ballon[0] <= lastEnd)
                {
                    continue;
                }

                // 換一顆新氣球
                else
                {
                    count++;
                    lastEnd = ballon[1];
                    continue;
                }
            }

            return count;
        }

        public Solution()
        {
            int[][] points = { new[] { 10, 16 }, new[] { 2, 8 }, new[] { 1, 6 }, new[] { 7, 12 } };
            this.FindMinArrowShots(points);
        }
    }
}