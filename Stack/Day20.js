/**2390. Removing Stars From a String
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = new Array();
    let ans = ""

    for(let i = 0;i<s.length;i++){

         if(s[i] === '*') stack.pop()
         else stack.push(s[i])
    }
    for(let i = 0;i<stack.length;i++){

          ans += stack[i]
    }
    return ans
};

console.log(removeStars('leet**cod*e'))
console.log(removeStars('abced*****'))
