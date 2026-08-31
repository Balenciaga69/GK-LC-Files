namespace lc0211 {
  interface iNode {
    val: string;
    children: iNode[];
    isWord: boolean;
  }
  class WordDictionary {
    private root: iNode = { val: "根", children: [], isWord: false };
    constructor() {}
    addWord(word: string): void {
      let i = 0;
      let node = this.root;
      while (i < word.length) {
        let target = node.children.find((e) => e.val === word[i]);
        if (target) node = target;
        else {
          node.children.push({ val: word[i], children: [], isWord: false });
          node = node.children[node.children.length - 1];
        }
        i++;
        if (i === word.length) node.isWord = true;
      }
    }
    search(s: string): boolean {
      let result = false;
      this.root.children.forEach((e) => {
        if (result) return;
        if (e.val !== s[0] && s[0] !== ".") return;
        dfs(e, 0);
      });
      return result;
      function dfs(node: iNode, i: number) {
        if (i === s.length || result) return;
        if (i == s.length - 1 && node.isWord === true) {
          result = true;
          return;
        }
        node.children.forEach((e) => {
          if (e.val !== s[i + 1] && s[i + 1] !== ".") return;
          dfs(e, i + 1);
        });
      }
    }
  }
  let o = new WordDictionary();
  o.addWord("at");
  o.addWord("and");
  o.addWord("an");
  o.addWord("add");
  //   console.log(o.search("a"));
  //   console.log(o.search(".at"));
  o.addWord("bat");
  console.log(o.search(".at"));
  console.log(o.search("an."));
  //   console.log(o.search("a.d."));
  //   console.log(o.search("b."));
  //   console.log(o.search("a.d"));
  //   console.log(o.search("."));
}
