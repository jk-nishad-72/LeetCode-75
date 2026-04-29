

/**443. String Compression
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    

   let idx = 0;
    for(let i = 0; i < chars.length; i++){
        let char = chars[i];
        let count = 0;
        while(i < chars.length && char === chars[i]){
            count++;
            i++;
        }
        if(count == 1){
            chars[idx++] = char;
        }else{
            chars[idx++] = char;
            let countStr = count.toString();

            for(let j = 0; j < countStr.length; j++){
                chars[idx++] = countStr[j];
            }
        }
        i--
    }
    // console.log(chars);
    return idx;
};

console.log(compress(chars = ["a","a","b","b","c","c","c"]));
 

 console.log(compress( chars = ["a","a","a","b","b","a","a"]))
