/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
   let  n = nums.length;
  let pref = new Array(n).fill(0)
  let suff = new Array(n).fill(0)

  for(let i = 1;i< n;i++){
    pref[i] = pref[i-1]  + nums[i-1]
  }


  for(let j = n-2;j>=0;j--){
    suff[j] = suff[j+1]  + nums[j+1]
  }

  
  for(let i = 0;i< n;i++){
     
     if(pref[i] === suff[i]) return i
  }

  return -1

};

console.log(pivotIndex([1,7,3,6,5,6])); // 3
console.log(pivotIndex([1,2,3])); // -1
console.log(pivotIndex([2,1,-1])); // 0