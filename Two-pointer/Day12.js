/**11. Container With Most Water
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
 let ans = 0;
let i = 0;
let j = height.length-1;
while(i<j){
ans = Math.max(ans,(Math.min(height[i] , height[j])* (j-i)))

 if(height[i] < height[j]) i++
 else j--
}

 return ans
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49