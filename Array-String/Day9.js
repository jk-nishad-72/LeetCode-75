/**—>Q. 334. 334. Increasing Triplet Subsequence ✅ 
 * @param {number[]} nums
 * @return {boolean}
 */

// O(n^3) solution
// var increasingTriplet = function(nums) {
    

//      for(let i = 0;i<nums.length;i++){
//          for(let j = i+1;j<nums.length;j++){
//              for(let k = j+1;k<nums.length;k++){
//                  if(i < j && j < k && nums[i] < nums[j] && nums[j] < nums[k]){
//                      return true
//                  }
//              }
//          }
//      }
//      return false
// };


var increasingTriplet = function(nums) {
    

   let first = Number.MAX_VALUE;
   let second = Number.MAX_VALUE;
   for(let i = 0;i<nums.length;i++){
      
     if(nums[i] <= first){
            first = nums[i]

     }else if(nums[i] <= second){
            second = nums[i]
     }else return true
   }

    return false
};
   
     



console.log(increasingTriplet([1,2,3,4,5])); // true
console.log(increasingTriplet([5,4,3,2,1])); // false
console.log(increasingTriplet([2,1,5,0,4,6])); // true
