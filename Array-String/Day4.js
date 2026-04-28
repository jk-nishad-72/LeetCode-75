
/**—>Q.[605. Can Place Flowers](https://leetcode.com/problems/can-place-flowers/) ✅ ( check left || 0 , right || length , and current element ) 
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
   let count = 0;
   for(let i = 0;i< flowerbed.length;i++){

        if(
             flowerbed[i] === 0 &&
              ( i=== 0 || flowerbed[i -1 ] === 0 )&&
              (i === flowerbed.length-1 ||  flowerbed[i + 1] === 0)
        ){
             flowerbed[i] = 1
             count++
        }

       if(count >= n) return true
   }

   return false

};

console.log(canPlaceFlowers(flowerbed = [1,0,0,0,1], n = 1));
