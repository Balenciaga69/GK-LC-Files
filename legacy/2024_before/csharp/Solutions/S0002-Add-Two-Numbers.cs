namespace Csharp.Solutions
{
    using System.Collections;
    using Csharp.Helper;
    using Csharp.Structure;

    public class S0002_Add_Two_Numbers
   {
      public ListNode? AddTwoNumbers(ListNode? l1, ListNode? l2)
      {
         ListNode? result = null;
         ListNode? currentNode = null;
         int curry = 0;
         while (l1 != null || l2 != null)
         {
            int sum = 0 + curry;

            if (l1 != null)
            {
               sum += l1.val;
               l1 = l1.next;
            }

            if (l2 != null)
            {
               sum += l2.val;
               l2 = l2.next;
            }

            if (currentNode == null)
            {
               currentNode = new ListNode(sum % 10, null);
            }
            else
            {
               currentNode.next = new ListNode(sum % 10, null);
               currentNode = currentNode.next;
            }

            if (result == null)
            {
               result = currentNode;
            }

            curry = sum / 10;
         }

         if (curry > 0 && currentNode != null)
         {
            currentNode.next = new ListNode(curry, null);
         }

         return result;
      }

      public ListNode AddTwoNumbersQueueVer(ListNode? l1, ListNode? l2)
      {
         var queue1 = new Queue<int>();
         var queue2 = new Queue<int>();
         var curry = 0;
         ListNode? root = null;
         ListNode? currentNode = null;
         while (l1 != null || l2 != null)
         {
            if (l1 != null)
            {
               queue1.Enqueue(l1.val);
               l1 = l1.next;
            }

            if (l2 != null)
            {
               queue2.Enqueue(l2.val);
               l2 = l2.next;
            }
         }

         while (queue1.Count != 0 || queue2.Count != 0)
         {
            var val1 = queue1.Count > 0 ? queue1.Dequeue() : 0;
            var val2 = queue2.Count > 0 ? queue2.Dequeue() : 0;
            var total = val1 + val2 + curry;
            curry = total / 10;
            if (currentNode != null)
            {
               currentNode.next = new ListNode(total % 10, null);
               currentNode = currentNode.next;
            }
            else
            {
               currentNode = new ListNode(total % 10, null);
               root = currentNode;
            }
         }

         if (curry > 0 && currentNode != null)
         {
            currentNode.next = new ListNode(curry % 10, null);
         }

         return root ?? new ListNode(0, null);
      }

      public void Run()
      {
         var helper = new Helper();
         var a = helper.ConvertArrayToLinkedList(new int[] { 9, 9, 9, 9, 9, 9, 9 });
         var b = helper.ConvertArrayToLinkedList(new int[] { 9, 9, 9, 9 });
         var c = this.AddTwoNumbersQueueVer(a, b);
         Console.WriteLine(c.val);
      }
   }
}