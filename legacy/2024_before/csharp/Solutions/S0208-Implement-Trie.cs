namespace Csharp.Solutions
{
    public class Trie
    {
        private Dictionary<char, Trie> trie;

        public Trie()
        {
            this.trie = new Dictionary<char, Trie>();
        }

        public void Insert(string word)
        {
            var dict = this.trie;
            foreach (char w in word)
            {
                if (!dict.ContainsKey(w))
                {
                    dict[w] = new Trie();
                }

                dict = dict[w].trie;
            }
            dict['~'] = new Trie();
        }

        public bool Search(string word)
        {
            var dict = this.trie;
            foreach (char w in word)
            {
                if (!dict.ContainsKey(w)) return false;
                dict = dict[w].trie;
            }

            return dict.ContainsKey('~');
        }

        public bool StartsWith(string prefix)
        {
            var dict = this.trie;
            foreach (char w in prefix)
            {
                if (!dict.ContainsKey(w)) return false;
                dict = dict[w].trie;
            }

            return true;
        }
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.Insert(word);
 * bool param_2 = obj.Search(word);
 * bool param_3 = obj.StartsWith(prefix);
 */