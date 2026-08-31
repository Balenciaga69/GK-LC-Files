namespace Csharp.HelperFunctions;
using Csharp.Structure;

public static class Helper
{
    public static ListNode? ConvertArrayToLinkedList(int[] arr)
    {
        ListNode head = new ListNode(arr[0], null);
        var curr = head;
        for (int i = 1; i < arr.Length; i++)
        {
            curr.next = new ListNode(arr[i], null);
            curr = curr.next;
        }

        return head;

        //return arr.Aggregate((ListNode?)null, (next, val) => new ListNode(val, next));
    }

    public static TreeNode ConvertArrayToBST(int?[] arr)
    {
        if (arr is null || arr.Length == 0) throw new ArgumentException();

        var queue = new Queue<TreeNode>();
        var root = new TreeNode(arr[0] ?? 0);
        queue.Enqueue(root);

        var i = 1;
        while (i < arr.Length)
        {
            var currNode = queue.Dequeue();
            void AttachNode(ref TreeNode? side)
            {
                if (i < arr.Length && arr[i] is not null)
                {
                    {
                        var newNode = new TreeNode(arr[i] ?? 0);
                        queue.Enqueue(newNode);
                        side = newNode;
                    }
                }

                i++;
            }

            AttachNode(ref currNode.left);
            AttachNode(ref currNode.right);
        }

        return root;
    }
}