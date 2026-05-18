

/**1657. Determine if Two Strings Are Close

 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {


    if (word1.length !==  word2.length) return false

    let map1 = new Map();
    let ma2 = new Map();
    let set1 = new Set();
    let set2 = new Set();
    let arr1 = [];
    let arr2 = [];

    for(let ch of word1){
         map1.set(ch , (map1.get(ch) || 0) + 1)
    }

      for(let ch of word2){
         ma2.set(ch , (ma2.get(ch) || 0) + 1)
    }

     for(let [key  , values] of map1){
         
         set1.add(key)
         arr1.push(values)

     }
       for(let [key  , values] of ma2){
         
         set2.add(key)
         arr2.push(values)
         
     }

      arr1.sort((a, b)=> a - b)
      arr2.sort((a, b)=> a - b)

      for(let ch of set1){
         if(!set2.has(ch)) return false
      }
      for(let ch of set2){
         if(!set1.has(ch)) return false
      }

      for(let i = 0;i< arr1.length;i++){
        if(arr1[i] != arr2[i]) return false
      }


       return true


};


console.log(closeStrings(word1 = "abc", word2 = "bca"))
console.log(closeStrings( word1 = "a", word2 = "aa"))
console.log(closeStrings(word1 = "cabbba", word2 = "abbccc"))
console.log(closeStrings(word1 ="cabbba", word2 = "aabbss"))