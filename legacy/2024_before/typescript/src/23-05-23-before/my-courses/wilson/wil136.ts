export class GraphNode {
  val: string = "";
  friends: GraphNode[] = [];
  visited: boolean = false;
  constructor(val: string) {
    this.val = val;
  }
}

namespace wil136 {
  let A = new GraphNode("A");
  let B = new GraphNode("B");
  let C = new GraphNode("C");
  let D = new GraphNode("D");
  let E = new GraphNode("E");
  let F = new GraphNode("F");
  let G = new GraphNode("G");
  let H = new GraphNode("H");
  let I = new GraphNode("I");
  let J = new GraphNode("J");
  let K = new GraphNode("K");
  let L = new GraphNode("L");
  let M = new GraphNode("M");
  A.friends.push(E);
  A.friends.push(F);
  B.friends.push(D);
  C.friends.push(D);
  D.friends.push(B);
  D.friends.push(C);
  D.friends.push(E);
  D.friends.push(I);
  E.friends.push(A);
  E.friends.push(D);
  E.friends.push(F);
  E.friends.push(I);
  F.friends.push(A);
  F.friends.push(E);
  F.friends.push(I);
  G.friends.push(H);
  G.friends.push(I);
  H.friends.push(G);
  H.friends.push(I);
  H.friends.push(L);
  I.friends.push(D);
  I.friends.push(E);
  I.friends.push(F);
  I.friends.push(G);
  I.friends.push(H);
  I.friends.push(J);
  I.friends.push(K);
  I.friends.push(M);
  J.friends.push(I);
  J.friends.push(M);
  K.friends.push(I);
  K.friends.push(L);
  K.friends.push(M);
  L.friends.push(H);
  L.friends.push(K);
  M.friends.push(I);
  M.friends.push(J);
  M.friends.push(K);
  // * * * * *  * * * * *
  function dft(node: GraphNode) {
    dft_result.push(node.val);
    node.visited = true;
    node.friends.forEach((friend) => {
      if (!friend.visited) dft(friend);
    });
  }
  let dft_result: string[] = [];
  dft(A);
  console.log(`正在測試...`, dft_result);
  // * * * * *  * * * * *
  let bft_result: string[] = [];
  //   bft(A);
  function bft(node: GraphNode) {
    let q: GraphNode[] = [node];
    while (q.length > 0) {
      let curr = q.shift()!;
      bft_result.push(curr.val);
      curr.visited = true;
      const newFriends = curr.friends
        .filter((friend) => !friend.visited && !q.includes(friend))
        .map((friend) => friend);
      q = [...q, ...newFriends];
    }
  }
}
