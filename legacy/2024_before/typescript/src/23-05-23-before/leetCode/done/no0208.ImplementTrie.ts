namespace lc0208 {
  interface iTreeNode {
    val: string;
    children: Map<string, iTreeNode>;
    canSearch: boolean;
  }
  class Trie {
    constructor() {}
    private root: iTreeNode = {
      val: "根",
      children: new Map(),
      canSearch: false,
    };
    insert(word: string): void {
      let node = this.root;
      for (const c of word) {
        if (!node.children.has(c)) {
          node.children.set(c, {
            val: c,
            children: new Map(),
            canSearch: false,
          });
        }
        node = node.children.get(c)!;
      }
      node.canSearch = true;
    }
    search(word: string): boolean {
      let node = this.root;
      for (const c of word) {
        if (node.children.has(c)) node = node.children.get(c)!;
        else return false;
      }
      return node.canSearch;
    }
    startsWith(prefix: string): boolean {
      let node = this.root;
      for (const c of prefix) {
        if (node.children.has(c)) node = node.children.get(c)!;
        else return false;
      }
      return true;
    }
  }
  let o = new Trie();
  console.log(`正在測試...`, o.insert("apple"));
  console.log(`正在測試...`, o.search("apple"));
  console.log(`正在測試...`, o.search("app"));
}
