 namespace Csharp.Solutions
{
   public class S0027_Remove_Element
   {
      public int RemoveElement(int[] nums, int val)
      {
         var left = 0;
         var right = nums.Length - 1;
         while (left <= right)
         {
            if (nums[left] == val)
            {
               nums[left] = nums[right];
               right--;
            }
            else
            {
               left++;
            }
         }

         return left;
      }
   }
}