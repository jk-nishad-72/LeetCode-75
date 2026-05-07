

/**1679. Max Number of K-Sum Pairs
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === k) {
                count++;
                nums.splice(j, 1);
                break;
            }
        }
    }

    return count;

    //        let map = new Map();
    //   let ans = 0
    // for(let i =0;i<nums.length;i++){
    //     if(map.has(k-nums[i])){
         
    //      map.delete(k-nums[i])
    //        ans++ 
          
    //     }else{
    //         map.set(nums[i],i)
    //     }
    // }
    // return ans
};

console.log(maxOperations([1,2,3,4], 5)) // 2
console.log(maxOperations([3,1,3,4,3], 6)) // 1