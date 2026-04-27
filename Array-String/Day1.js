
/**1768. Merge Strings Alternately
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(w1, w2){

    let result = '';
    let i = 0;
    let j = 0;
    while(i < w1.length && j < w2.length){
           result += w1[i++] + w2[j++] 
    }

     while(i < w1.length ){
           result += w1[i++]        
    }

        while( j < w2.length){
           result +=  w2[j++]   
    }

     return result 
    
};

console.log(mergeAlternately('jajd' , 'jaykishan'));
