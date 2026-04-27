/**1071. Greatest Common Divisor of Strings
   Intution: If str1 + str2 is not equal to str2 + str1, then there is no common divisor string, return "".

   If str1 + str2 is equal to str2 + str1, then we can find the greatest common divisor string length by
    finding the gcd of the lengths of str1 and str2.   
    
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  
    
    if(str1.length < str2.length) return gcdOfStrings(str2, str1);

    if(str1 + str2 !== str2 + str1) return "";

    function gcd(a, b){

        if(b === 0) return a;
        return gcd(b, a % b);
    }

    let anslength = gcd(str1.length , str2.length)

    return str1.substring(0, anslength);

};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));