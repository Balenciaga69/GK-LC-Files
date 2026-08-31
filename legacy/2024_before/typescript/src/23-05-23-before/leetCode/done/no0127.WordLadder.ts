namespace lc0127 {
  function ladderLength(
    beginWord: string,
    endWord: string,
    wordList: string[]
  ): number {
    let currQ: string[] = [beginWord];
    let nextQ: string[] = [];
    const mySet = new Set(wordList);
    let depth = 1;
    // * * * * *  * * * * *
    while (currQ.length) {
      const word = currQ.shift()!;
      if (word === endWord) return depth;
      nextQ.push(...getWordFromSet(word));
      if (currQ.length === 0) {
        currQ = nextQ;
        nextQ = [];
        depth++;
      }
    }
    return 0;
    function getWordFromSet(str: string) {
      // * * * * * set to array * * * * *
      const list: string[] = [];
      const passList: string[] = [];
      mySet.forEach((val) => list.push(val));
      // * * * * * build passList * * * * *
      for (const item of list) {
        let failCount = 0;
        for (let i = 0; i < item.length; i++) {
          if (str[i] !== item[i]) failCount++;
          if (failCount > 1) break;
        }
        if (failCount <= 1) passList.push(item);
      }
      // * * * * * delete item from set prevent loop * * * * *
      passList.forEach((val) => mySet.delete(val));
      // * * * * * return * * * * *
      return passList;
    }
  }
  const beginWord = "hit",
    endWord = "cog",
    wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
  ladderLength(beginWord, endWord, wordList);
}
