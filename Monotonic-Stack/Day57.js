

console.log(' Day 57 of LC challenge Monotonic Stack  ');

//* Brute force solution 

// var StockSpanner = function() {
    

//     this.price = [];
// };

// /** 
//  * @param {number} price
//  * @return {number}
//  */
// StockSpanner.prototype.next = function(price) {

    

//      this.price.push(price) 

//      let i = this.price.length-1;

//      let count = 0
//      while(this.price[i] <= price && i >= 0){
//         count++
//         i--

//      }
//      return count
    

// };

/** 901. Online Stock Span
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 *  

Example 1:

Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]
 */



 //* optimal solution 


/**
 * 🔸 Algorithm

For each price:

1)Initialize span = 1
2)While stack not empty AND stack.top.price <= price:
   ->Add stack.top.span to span
   ->Pop stack

3)Push (price, span) into stack
4)Return span
 */
var StockSpanner = function() {
     this.stack = [];
};
/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    // 1)Initialize span = 1
    let span = 1;

//     2)While stack not empty AND stack.top.price <= price:
    while(this.stack.length != 0 && this.stack[this.stack.length - 1][0] <= price){

//    ->Add stack.top.span to span
        span  += this.stack[this.stack.length - 1][1]
//    ->Pop stack
        this.stack.pop();
    }
    // 3)Push (price, span) into stack

    this.stack.push([price , span])

    return span 
};


 var obj = new StockSpanner()
 var param_1 = obj.next(100) 
 
 console.log(param_1);

 var param_2 = obj.next(80) 
 var param_3 = obj.next(60) 
 var param_4 = obj.next(70) 

 var param_5 = obj.next(60) 
 var param_6 = obj.next(75) 
 var param_7 = obj.next(85) 
 console.log(param_7);
 

 
