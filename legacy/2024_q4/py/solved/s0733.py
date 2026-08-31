from typing import List


class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        if image[sr][sc] != color:
            Solution.dfs(self, image, sr, sc, image[sr][sc], color)
        return image

    def dfs(self, image: List[List[int]], x: int, y: int, original_color: int, next_color: int) -> None:
        # 邊界 與 著色 判斷
        if x < 0 or y < 0 or x >= len(image) or y >= len(image[0]) or image[x][y] != original_color:
            return
        # 著色
        image[x][y] = next_color
        print(x, y)
        # 往四方擴散
        directions: list[tuple[int, int]] = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        for d in directions:
            (next_x, next_y) = (x+d[0], y+d[1])
            Solution.dfs(self, image, next_x, next_y,
                         original_color, next_color)
        return None


newImage = Solution().floodFill(image=[[1, 1, 1], [1, 1, 0], [
    1, 0, 1]], sr=1, sc=1, color=2)

print(newImage)
