/**1493. Longest Subarray of 1's After Deleting One Element
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    

    let left = 0;
    let right = 0;
    let zeroCount = 0;
    let maxLength = 0;  

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left);
        right++;
    }

    return maxLength;

};

console.log(longestSubarray([1,1,0,1])); // 3
console.log(longestSubarray([0,1,1,1,0,1,1,0,1])); // 5
console.log(longestSubarray([1,1,1])); // 2