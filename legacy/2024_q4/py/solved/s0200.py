from typing import List, Tuple


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if len(grid) == 0 or len(grid[0]) == 0:
            return 0
        return Solution.DFS(self, grid)

    def isOkCell(self, x: int, y: int, grid: List[List[str]]) -> bool:
      # 右、下
        if x >= len(grid) or y >= len(grid[0]):
            return False
      # 左、上
        if x <= -1 or y <= -1:
            return False
      # 已探訪陸地、海水
        if grid[x][y] != '1':
            return False
      # 陌生陸地
        return True
     
    def DFS(self, grid: List[List[str]]) -> int:
      totalIslands = 0
      stack: List[Tuple[int, int]] = []
      for i in range(0, len(grid)):
         for j in range(0, len(grid[0])):
               if grid[i][j] == '1':
                  totalIslands += 1
                  stack.append((i, j))
                  while len(stack) > 0:
                     (x, y) = stack.pop()
                     grid[x][y] = "x"
                     directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
                     for d in directions:
                           (new_x, new_y) = (x+d[0], y+d[1])
                           if Solution.isOkCell(self, new_x, new_y, grid):
                              stack.append((new_x, new_y))
   
      return totalIslands

    def BFS(self, grid: List[List[str]]) -> int:
        totalIslands = 0
        queue: List[Tuple[int, int]] = []
        for i in range(0, len(grid)):
            for j in range(0, len(grid[0])):
               # 找到著陸點
                if grid[i][j] == '1':
                    totalIslands += 1
                    queue.append((i, j))
                    while len(queue) > 0:
                        (x, y) = queue.pop(0)
                        # 標記走過
                        grid[x][y] = "x"
                        # 四方探訪新土地
                        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
                        for d in directions:
                            (new_x, new_y) = (x+d[0], y+d[1])
                           #  未出界且未探訪
                            if Solution.isOkCell(self, new_x, new_y, grid):
                                queue.append((new_x, new_y))

        return totalIslands


grid1: List[List[str]] = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]


grid2: List[List[str]] = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

Solution().numIslands(grid1)
