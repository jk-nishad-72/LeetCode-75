/**283. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Approach 1: Brute Force using extra space
// var moveZeroes = function(nums){
 
//     let ans = new Array(nums.length).fill(0)

//  let j = 0;

//  for(let i   = 0;i<nums.length ; i++){

//          if(nums[i] != 0){
//             ans[j++] = nums[i]
//          }
//  }

//  return ans
// };

// Approach 1: Brute Force using extra space
var moveZeroes = function(nums){
 
    let i = 0

 let j = 0;

while(j < nums.length){

         if(nums[j] != 0){
            let temp = nums[i]
            nums[i++] = nums[j]
            nums[j] = temp
         }
         else j++
 }

 return nums
};


console.log(moveZeroes(nums = [0,1,0,3,12]));
console.log(moveZeroes(nums = [0]));
