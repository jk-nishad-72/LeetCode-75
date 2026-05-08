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

var findMaxAverageOptimise = function(nums, k) {

    let i = 0;
    let j = 0;
    let sum = 0;
    let max = -Infinity;

    while(j < nums.length){
        sum += nums[j];

        if(j - i + 1 === k){
            max = Math.max(max , sum/k);
            sum -= nums[i]
            i++
        }
        j++
    }
    return max;
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4)) // 12.75
console.log(findMaxAverage([5], 1)) // 5

console.log(findMaxAverageOptimise([1,12,-5,-6,50,3], 4)) // 12.75
console.log(findMaxAverageOptimise([5], 1)) // 5