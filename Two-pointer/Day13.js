

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

     
};


function optimised(nums, k) {
    const freq = new Map();
    let count = 0;

    for (let num of nums) {
        const complement = k - num;

        if (freq.get(complement) > 0) {
            // Found a valid pair!
            count++;
            freq.set(complement, freq.get(complement) - 1); // consume it
        } else {
            // Store this number for future pairing
            freq.set(num, (freq.get(num) || 0) + 1);
        }
    }

    return count;
}
console.log(optimised([1,2,3,4], 5));
console.log(optimised([3,1,3,4,3], 6)); // 1


// console.log(maxOperations([1,2,3,4], 5)) // 2
// console.log(maxOperations([3,1,3,4,3], 6)) // 1