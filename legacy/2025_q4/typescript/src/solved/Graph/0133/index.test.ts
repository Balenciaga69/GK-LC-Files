import { cloneGraph, Node } from '.';

describe('133. Clone Graph', () => {
  function buildGraph(adjList: number[][]): Node | null {
    if (adjList.length === 0) return null;
    const nodes = adjList.map((_, i) => new Node(i + 1));
    for (let i = 0; i < adjList.length; i++) {
      nodes[i].neighbors = adjList[i].map(v => nodes[v - 1]);
    }
    return nodes[0];
  }

  function graphToAdjList(node: Node | null): number[][] {
    if (!node) return [];
    const visited = new Map<Node, number>();
    const result: number[][] = [];
    const queue: Node[] = [node];
    visited.set(node, 0);
    while (queue.length > 0) {
      const cur = queue.shift()!;
      const idx = visited.get(cur)!;
      result[idx] = cur.neighbors.map(n => {
        if (!visited.has(n)) {
          visited.set(n, visited.size);
          queue.push(n);
        }
        return n.val;
      });
    }
    return result;
  }

  test('should clone a connected graph', () => {
    const adj = [[2,4],[1,3],[2,4],[1,3]];
    const graph = buildGraph(adj);
    const cloned = cloneGraph(graph);
    expect(graphToAdjList(cloned)).toEqual(adj);
  });

  test('should handle single node with no neighbor', () => {
    const adj = [[]];
    const graph = buildGraph(adj);
    const cloned = cloneGraph(graph);
    expect(graphToAdjList(cloned)).toEqual(adj);
  });

  test('should handle empty graph', () => {
    const graph = buildGraph([]);
    const cloned = cloneGraph(graph);
    expect(cloned).toBeNull();
  });
});
