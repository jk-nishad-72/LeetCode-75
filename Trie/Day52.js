/*
 *1268. Search Suggestions System
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {

    products.sort();
    let ans = [];
    let ansStr = ''
    for (let i = 0; i < searchWord.length; i++) {
        let miniAns = []
        ansStr += searchWord[i]
        for (let j = 0; j < products.length; j++) {
            if (products[j].startsWith(ansStr)) {
                miniAns.push(products[j])
                if (miniAns.length === 3) break;
            }
        }
        ans.push(miniAns)
    }
    return ans
};
console.log(suggestedProducts(products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"], searchWord = "mouse"));

