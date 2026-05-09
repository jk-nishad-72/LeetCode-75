/**1456. Maximum Number of Vowels in a Substring of Given Length
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var maxVowels = function(s, k) {
    
//       let set = new Set(['a' , 'e' , 'i' , 'o' , 'u']);
//       let max = -Infinity;

//       console.log(set)
//       for(let i = 0;i <= s.length - k;i++){

//          let count = 0;

//          for(let j = i;j < i+k ;j++){
//              if(set.has(s[j])) count++
//          }
//          max = Math.max(count , max)
//       }
//       return max
// };


var maxVowels = function(s, k) {
    
      let set = new Set(['a' , 'e' , 'i' , 'o' , 'u']);
      let max = -Infinity;
      let i = 0; let j = 0;
      let count = 0;

      while( j < s.length){

            if(set.has(s[j])) count++;

            if(j - i + 1 === k){
                max = Math.max(count , max);
                if(set.has(s[i])) count--;
                i++
            }   
            j++
      }
      return max;
};


console.log(maxVowels("abciiidef", 3)) // 3
console.log(maxVowels("aeiou", 2)) // 2
console.log(maxVowels("leetcode", 3)) // 2