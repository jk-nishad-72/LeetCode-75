/**238. Product of Array Except Self

 * @param {number[]} nums
 * @return {number[]}
 */

// O(n^2) solution
// var productExceptSelf = function(nums) {
//    let arr = new Array(nums.length)

//      for(let i  = 0;i<nums.length;i++){
//                 let product = 1;
//          for(let j  = 0;j<nums.length;j++){
//                  if(i != j){
//                      product *= nums[j]
//                  }           }
         
//             arr[i] = product
//           }

//    return arr
// };


// O(n) solution with O(n) space complexity

var productExceptSelf = function(nums) {
    let n = nums.length
   let left = new Array(n)
   let right = new Array(n)

   for(let i = 0;i<n;i++){
        if(i ===0) left[i] = 1;
        else left[i] = left[i-1] * nums[i-1]  
   }

for(let i = n-1;i>= 0;i--){
        if(i === n-1) right[i] = 1;
        else right[i] = right[i+1] * nums[i+1]  
   }

   for(let i = 0;i<n;i++){
         nums[i] = left[i] * right[i] 
   }

   return nums

};

console.log(productExceptSelf([1,2,3,4]))