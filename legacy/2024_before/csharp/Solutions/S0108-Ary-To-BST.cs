using Csharp.Structure;

namespace Csharp.Solutions
{
    public class S0108_Ary_To_BST
    {
        public S0108_Ary_To_BST()
        {
            this.SortedArrayToBST(new int[] { -10, -3, 0, 5, 9 });
        }

        public TreeNode SortedArrayToBST(int[] nums)
        {
            var mid = nums.Length / 2;
            var left = 0;
            var right = nums.Length - 1;
            TreeNode root = new TreeNode { val = nums[mid] };
            if (nums.Length == 1) return root;
            if (left <= mid - 1) root.left = this.CreateNode(nums, left, mid - 1);
            if (right >= mid + 1) root.right = this.CreateNode(nums, mid + 1, right);
            return root;
        }

        private TreeNode CreateNode(int[] nums, int left, int right)
        {
            var mid = (left + right) / 2;
            TreeNode node = new TreeNode { val = nums[mid] };
            if (left <= mid - 1) node.left = this.CreateNode(nums, left, mid - 1);
            if (right >= mid + 1) node.right = this.CreateNode(nums, mid + 1, right);
            return node;
        }
    }
}