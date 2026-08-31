using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions
{
    internal class S0383_Ransom_Note
    {
        public void Run()
        {
            var ransomNote = "aa";
            var magazine = "aab";
            this.CanConstruct(ransomNote, magazine);
        }

        public bool CanConstruct(string ransomNote, string magazine)
        {
            // 簡單的排除:勒索信字數比雜誌還多 根本拚不起來
            if (magazine.Length < ransomNote.Length) return false;

            var dict = new Dictionary<char, int>();

            // 先處理 magazine
            for (int i = 0; i < magazine.Length; i++)
            {
                var cha = magazine[i];
                if (dict.TryGetValue(cha, out int count))
                {
                    dict[cha] = count + 1;
                }
                else
                {
                    dict.Add(cha, 1);
                }
            }

            for (int i = 0; i < ransomNote.Length; i++)
            {
                var cha = ransomNote[i];
                if (!dict.TryGetValue(cha, out int count))
                {
                    return false;
                }
                else
                {
                    dict[cha] = count - 1;
                    if (dict[cha] < 1) dict.Remove(cha);
                }
            }

            return true;
        }
    }
}
