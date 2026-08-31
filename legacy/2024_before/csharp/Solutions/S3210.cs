using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp.Solutions
{
    internal class S3210
    {
        public S3210()
        {
            var s = "dart";
            var k = 3;
            this.GetEncryptedString(s, k);
        }

        public string GetEncryptedString(string s, int k)
        {
            var chars = s.Select((x, i) => s[(i + k) % s.Length]).ToArray();
            var result = new string(chars);
            return result;
        }
    }
}
