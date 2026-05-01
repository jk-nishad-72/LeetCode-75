

console.log("Day 7: Array and String Manipulation");

/**151. Reverse Words in a String
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let words = s.split(" ");
    //  console.log(words);

     let ans = ''
     for(let i = words.length-1;i>=0;i--){
            if(words[i] !== ''){
                ans += words[i] + ' ';
            } 
     }
    ans = ans.trim();
    return ans;

   
};

console.log(reverseWords('hello word'));

