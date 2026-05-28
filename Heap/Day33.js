/**215. Kth Largest Element in an Array

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

         nums.sort((a,b)=> b - a  )
         return nums[k-1]

};

console.log(findKthLargest(nums = [3,2,1,5,6,4], k = 2)) 


