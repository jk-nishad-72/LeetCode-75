
/**—>Q.1431. Kids With the Greatest Number of Candies ✅(fnd Max , cmpr each ith + extrC > mx)  
 * 
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let ans = new Array(candies.length).fill(false) 

    let max = 0;
    for(let i = 0;i<candies.length;i++){
          max = Math.max(candies[i], max)
    }

    for(let j = 0;j<candies.length;j++){
         
          if((candies[j] +extraCandies) >= max ){
              ans[j] = true
          }
    }
    return ans
};

console.log(kidsWithCandies(candies = [2,3,5,1,3], extraCandies = 3));
