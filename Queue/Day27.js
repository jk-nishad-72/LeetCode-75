
var RecentCounter = function() {
    
 this.queue = [];
    

};

/** 933. Number of Recent Calls
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {

     this.queue.push(t);
  

    while (this.queue.length > 0 && this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// 1. Create a RecentCounter class with a constructor that initializes an empty queue to store the timestamps of recent calls.
// 2. Implement the ping method that takes a timestamp t as input and adds it to the queue.
// 3. Remove any timestamps from the queue that are older than t - 3000 milliseconds.
// 4. Return the number of timestamps currently in the queue, which represents the number of recent calls within the last 3000 milliseconds.

//example
// Input
// ["RecentCounter", "ping", "ping", "ping", "ping"]
// [[], [1], [100], [3001], [3002]]
// Output
// [null, 1, 2, 3, 3]
var obj = new RecentCounter()
console.log(obj.ping(1)) // returns 1
console.log(obj.ping(100)) // returns 2
console.log(obj.ping(3001)) // returns 3
console.log(obj.ping(3002)) // returns 3

