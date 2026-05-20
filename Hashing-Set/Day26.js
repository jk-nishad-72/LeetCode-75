/**1207. Unique Number of Occurrences
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {

    const map = new Map();
    let set = new Set();

    for (let n of arr) {

        map.set(n, (map.get(n) || 0) + 1);
    }

    // Checking of Occurences 

    for (let [key, Occurnec] of map) {

        if (set.has(Occurnec)) return false;
        else set.add(Occurnec);
    }

    return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueOccurrences([1, 2]))
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))