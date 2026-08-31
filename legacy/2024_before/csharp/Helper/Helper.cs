namespace Csharp.Helper
{
    using Csharp.Structure;

    public class Helper
    {
        public ListNode? ConvertArrayToLinkedList(int[] arr)
        {
            return arr.Aggregate((ListNode?)null, (next, val) => new ListNode(val, next));
        }
    }
}