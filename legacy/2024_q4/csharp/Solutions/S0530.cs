using Csharp.HelperFunctions;
using Csharp.Structure;

namespace Csharp.Solutions.S0530;
public class Solution
{
    public Solution()
    {
        int?[] ary = { 236, 104, 701, null, 227, null, 911 };
        var treeNode = Helper.ConvertArrayToBST(ary);
        this.GetMinimumDifference(treeNode);
    }

    public int GetMinimumDifference(TreeNode root)
    {
        var minDiff = int.MaxValue;
        int? lastVal = null;

        recursive(root);

        void recursive(TreeNode node)
        {
            if (node.left != null)
            {
                recursive(node.left);
            }

            if (lastVal != null)
            {
                var currDiff = node.val - (int)lastVal;
                minDiff = Math.Min(minDiff, currDiff);
            }

            lastVal = node.val;

            if (node.right != null)
            {
                recursive(node.right);
            }
        }

        return minDiff;
    }
}
