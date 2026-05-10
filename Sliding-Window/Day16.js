






/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    

    let i = 0;    let j  =0;
    let longest = 0;
    let set = new Set();
    while( j < s.length){

         if(set.has(s.charAt(j))){

             set.delete(s.charAt(i));
             i++;
         }else{
                set.add(s.charAt(j));
                longest = Math.max(longest, j - i + 1);
                j++;
         }
    }
    return longest;

};





//count occurrences of anagrams of pattern in text

// class Solution {
//     countAnagrams(txt, pat) {
//         // Write your code here 
//       let i = 0, j = 0, count = 0;
//       let textarr = new Array(26).fill(0);
//       let patarr = new Array(26).fill(0);

//         for(let k = 0; k < pat.length; k++){
//             patarr[pat.charCodeAt(k) - 97]++;
//         }

//       let k = pat.length;
//       while(j < txt.length){
//          textarr[txt.charCodeAt(j) - 97]++;
     
//          if(j - i + 1 == k){
//              if(this.anagram(textarr, patarr )) count++;
//              textarr[txt.charCodeAt(i) - 97]--;
//              i++;
             
//          }
//          j++; 
//       }
//         return count;
        
//     }

//     anagram(textarr , patarr){
         
//          for(let i = 0; i < 26; i++){
//              if(textarr[i] != patarr[i]) return false
//          }
//          return true
//     }
// }



// const txt = "aabbaabb";
// const pat = "ab";

// const obj = new Solution();
// const ans = obj.countAnagrams(txt, pat);
// console.log(ans);
