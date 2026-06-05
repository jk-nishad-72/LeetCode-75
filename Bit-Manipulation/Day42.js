/**1318. Minimum Flips to Make a OR b Equal to c
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    
    let flips = 0;

    for (let i = 0; i < 32; i++) {
        let bitA = (a >> i) & 1;
        let bitB = (b >> i) & 1;
        let bitC = (c >> i) & 1;

        if (bitC === 1) {
            if (bitA === 0 && bitB === 0) {
                flips += 1;
            }
        } else {
            flips += bitA + bitB;
        }
    }
    return flips; 
};

console.log(minFlips(a = 2, b = 6, c = 5)) 