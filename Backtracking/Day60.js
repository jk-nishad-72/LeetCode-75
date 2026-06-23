

console.log('Day 60 of LC 75 Challenge Backtracking ');


/** 17. Letter Combinations of a Phone Number 
 * @param {string} digits
 * @return {string[]}
 */
 var solve = function(s, ans , cur, i , map){
    if(i == s.length){
        if(cur.length > 0) ans.push(cur)
        return
    }
    let tp = map.get(s.charAt(i))
    for(let j = 0 ;j<tp.length;j++){
          
        solve(s , ans , cur + tp.charAt(j), i+1, map)
    }
 }
var letterCombinations = function(digits) {

 let ans = []
 let map = new Map()
     map.set('2','abc')
     map.set('3','def')
     map.set('4','ghi')
     map.set('5','jkl')
     map.set('6','mno')
     map.set('7','pqrs')
     map.set('8','tuv')
     map.set('9','wxyz')
    solve(digits, ans , '', 0, map)
    return ans
};

console.log(letterCombinations(digits = "23"));
console.log(letterCombinations( digits = "2"));

