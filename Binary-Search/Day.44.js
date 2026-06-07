

console.log(' Day 44 of LC 75 challenge BS ')

/**2300. Successful Pairs of Spells and Potions
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    
  let ans = [];


  for(let i = 0;i<spells.length;i++){

     let count = 0;

     for(let j = 0;j<potions.length ;j++){

         if((spells[i] * potions[j]) >= success  ) count++
     }

     ans.push(count)
  }
 
   return ans
}; 


console.log(successfulPairs(spells = [5,1,3], potions = [1,2,3,4,5], success = 7))
console.log(successfulPairs( spells = [3,1,2], potions = [8,5,8], success = 16))