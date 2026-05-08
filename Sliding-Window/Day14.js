/**643. Maximum Average Subarray I
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    

    let max = -Infinity;

    for (let i = 0; i <= nums.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += nums[j];
        }
        max = Math.max(max, sum / k);
    }
    return max;


};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4)) // 12.75
console.log(findMaxAverage([5], 1)) // 5