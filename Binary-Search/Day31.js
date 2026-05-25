/**162. Find Peak Element
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
     
    let f = 0;
    let l = nums.length-1;
    while(f < l) {

         let m = Math.floor((f+l)/2);

         if( nums[m] <= nums[m+1]) f = m+1;
         else l = m;

    }
    return f
};

console.log(findPeakElement([1,2,3,1])) // 2
console.log(findPeakElement([1,2,1,3,5,6,4])) // 1 or 5
console.log(findPeakElement([1,2,3,4,5])) // 4