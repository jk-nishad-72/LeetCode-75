/**1732. Find the Highest Altitude
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let n  = gain.length;
    let altitude = new Array(n+1).fill(0);
    let highestAlt = altitude[0];

    for(let i =1 ;i< n+1 ; i++){
         altitude[i] = gain[i-1] + altitude[i-1]
         highestAlt = Math.max(highestAlt , altitude[i])
    }

    return highestAlt
};

console.log(largestAltitude([-5,1,5,0,-7])) // 1

console.log(largestAltitude([-4,-3,-2,-1,4,3,2])) // 0

