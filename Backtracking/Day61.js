

console.log( ' Day 61 of LC75 challenge Backtracking ');


/**216. Combination Sum III
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];

    function backtrack(start, path, sum) {
        // ✅ valid combination
        if (path.length === k && sum === n) {
            result.push([...path]);
            return;
        }

        // ❌ invalid case
        if (path.length > k || sum > n) {
            return;
        }

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(i + 1, path, sum + i);
            path.pop(); // backtrack
        }
    }

    backtrack(1, [], 0);
    return result;
};

console.log(combinationSum3(k = 3, n = 7));
console.log(combinationSum3(k = 3, n = 9));
console.log(combinationSum3(k = 4, n = 1));
