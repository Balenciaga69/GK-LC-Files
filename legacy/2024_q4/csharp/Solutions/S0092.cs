using Csharp.Structure;

namespace Csharp.Solutions.S0092;

public class Solution
{
    public Solution()
    {
        var ary = new int[] { 1, 2, 3, 4, 5 };
        var ary2 = new int[] { 1, 2, 3, 4, 5 };
        var node = HelperFunctions.Helper.ConvertArrayToLinkedList(ary);
        ReverseBetween(node, 2, 4);
    }

    public ListNode ReverseBetween(ListNode head, int left, int right)
    {
        if (head == null || left == right) return head;

        // 創建虛擬頭節點
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;

        // 找到 left 之前的節點 (prev)
        for (int i = 1; i < left; i++)
        {
            prev = prev.next;
        }

        // 開始反轉 left 到 right 節點
        ListNode curr = prev.next;

        // 1 → 2 → 3 → 4 → 5
        // 1 → 3 → 2 → 4 → 5
        // 1 → 4 → 3 → 2 → 5
        for (int i = left; i < right; i++)
        {
            // prev - curr - next
            var next = curr.next;
            curr.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }

        return dummy.next;
    }
}