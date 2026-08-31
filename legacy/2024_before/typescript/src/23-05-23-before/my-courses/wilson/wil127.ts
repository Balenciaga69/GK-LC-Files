namespace wil127 {
  class Node {
    visited = false;
    edges: iEdge[] = [];
    constructor(private val: string) {}
    addEdge(edge: iEdge) {
      this.edges.push(edge);
    }
  }
  interface iEdge {
    node1: Node;
    node2: Node;
    weight: number;
  }
  function createEdge(node1: Node, node2: Node, weight: number) {
    const out: iEdge = { node1, node2, weight };
    return out;
  }
  const A = new Node("a");
  const B = new Node("b");
  const C = new Node("c");
  const D = new Node("d");
  const E = new Node("e");
  const F = new Node("f");
  const e1 = createEdge(A, B, 10);
  A.addEdge(e1);
  B.addEdge(e1);
  const e2 = createEdge(A, C, 8);
  A.addEdge(e2);
  C.addEdge(e2);
  const e3 = createEdge(B, D, 6);
  B.addEdge(e3);
  D.addEdge(e3);
  const e4 = createEdge(C, D, 5);
  C.addEdge(e4);
  D.addEdge(e4);
  const e5 = createEdge(B, E, 7);
  B.addEdge(e5);
  E.addEdge(e5);
  const e6 = createEdge(D, E, 4);
  D.addEdge(e6);
  E.addEdge(e6);
  const e7 = createEdge(D, F, 3);
  D.addEdge(e7);
  F.addEdge(e7);
  const e8 = createEdge(E, F, 1);
  E.addEdge(e8);
  F.addEdge(e8);
  const e9 = createEdge(C, F, 8);
  C.addEdge(e9);
  F.addEdge(e9);
  mainFunc(A);
  let nextE: iEdge[] = [];
  const allNode = [A, B, C, D, E, F];
  // * * * * *  * * * * *
  function mainFunc(start: Node) {
    nextE = Object.assign([], start.edges);
    let resE: iEdge[] = [];
    let bestEdge = getBestEdge();
    // * * * * *  * * * * *
    while (bestEdge !== null) {
      // * * * * *  * * * * *
      bestEdge.node1.visited = true;
      bestEdge.node2.visited = true;
      resE.push(bestEdge);
      // * * * * *  * * * * *
      nextE = [];
      allNode
        .filter((n) => n.visited)
        .forEach((n) => (nextE = [...nextE, ...n.edges]));
      nextE = nextE.filter((e) => !resE.includes(e));
      nextE = nextE.filter((e) => !(e.node1.visited && e.node2.visited));
      bestEdge = getBestEdge();
    }
    return resE;
  }
  function getBestEdge() {
    if (nextE.length === 0) return null;
    let minI = 0;
    for (let i = 1; i < nextE.length; i++) {
      if (nextE[i].weight < nextE[minI].weight) minI = i;
    }
    return nextE[minI];
  }
}
