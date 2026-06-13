//*2336. Smallest Number in Infinite Set



class SmallestInfiniteSet {
    constructor() {
        this.current = 1;
        this.minHeap = [];
        this.set = new Set();
    }

    popSmallest() {
        if (this.minHeap.length > 0) {
            let smallest = this.minHeap.shift(); // simulate heap
            this.set.delete(smallest);
            return smallest;
        }
        return this.current++;
    }

    addBack(num) {
        if (num < this.current && !this.set.has(num)) {
            this.minHeap.push(num);
            this.minHeap.sort((a, b) => a - b); // simple heap simulation
            this.set.add(num);
        }
    }
}


/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 *
 */
 var obj = new SmallestInfiniteSet()
  var param_1 = obj.popSmallest()
  obj.addBack(1)

  console.log(param_1);
  