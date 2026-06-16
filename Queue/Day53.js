

console.log(' Day 53 OF LC75 challenge Queue ')

/**649. Dota2 Senate
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
let n = senate.length;
    let qr = [], qd = [];
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') qr.push(i);
        else qd.push(i);
    }
    while (qr.length && qd.length) {
        let r = qr.shift();
        let d = qd.shift();
        if (r < d) {
            qr.push(r + n);
        } else {
            qd.push(d + n);
        }
    }
    return qr.length ? "Radiant" : "Dire";
};

console.log(predictPartyVictory( senate = "RD"));
// console.log(predictPartyVictory( senate = "RD"));
