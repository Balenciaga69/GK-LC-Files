using Shared.Structure;

namespace Shared.Helpers;

public static class LinkedListHelper
{
    public static ListNode? ConvertArrayToLinkedList(int[] arr)
    {
        return arr.Aggregate((ListNode?)null, (next, val) => new ListNode(val, next));
    }
}
