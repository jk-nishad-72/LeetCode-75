
console.log( 'Day 55 of LC75 challenge  Heap(priority queue) ');


// Brute force 
var totalCost = function(costs, k, candidates) {
    let n = costs.length;

    // Min heaps (using arrays + sort for simplicity)
    let left = [];
    let right = [];

    let i = 0;
    let j = n - 1;

    // Fill initial heaps
    for (let c = 0; c < candidates && i <= j; c++) {
        left.push(costs[i++]);
    }

    for (let c = 0; c < candidates && i <= j; c++) {
        right.push(costs[j--]);
    }

    let total = 0;

    for (let hire = 0; hire < k; hire++) {
        left.sort((a, b) => a - b);
        right.sort((a, b) => a - b);

        let leftMin = left.length ? left[0] : Infinity;
        let rightMin = right.length ? right[0] : Infinity;

        if (leftMin <= rightMin) {
            total += left.shift();
            if (i <= j) left.push(costs[i++]);
        } else {
            total += right.shift();
            if (i <= j) right.push(costs[j--]);
        }
    }

    return total;
};




// optimal
var totalCost = function(costs, k, candidates) {
    const n = costs.length;
    
    // ── Min-Heap ─────────────────────────────────────────────
    class MinHeap {
        constructor() { this.h = []; }
        
        push(val) {
            this.h.push(val);
            this._bubbleUp(this.h.length - 1);
        }
        pop() {
            const top = this.h[0];
            const last = this.h.pop();
            if (this.h.length > 0) {
                this.h[0] = last;
                this._siftDown(0);
            }
            return top;
        }
        peek()  { return this.h[0]; }
        size()  { return this.h.length; }
        
        _bubbleUp(i) {
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (this.h[p] <= this.h[i]) break;
                [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
                i = p;
            }
        }
        _siftDown(i) {
            const n = this.h.length;
            while (true) {
                let smallest = i;
                const l = 2 * i + 1, r = 2 * i + 2;
                if (l < n && this.h[l] < this.h[smallest]) smallest = l;
                if (r < n && this.h[r] < this.h[smallest]) smallest = r;
                if (smallest === i) break;
                [this.h[smallest], this.h[i]] = [this.h[i], this.h[smallest]];
                i = smallest;
            }
        }
    }
    // ─────────────────────────────────────────────────────────

    const left  = new MinHeap();
    const right = new MinHeap();

    let lo = 0, hi = n - 1;

    // Seed initial candidates (guard against overlap)
    for (let i = 0; i < candidates && lo <= hi; i++, lo++) left.push(costs[lo]);
    for (let i = 0; i < candidates && lo <= hi; i++, hi--) right.push(costs[hi]);

    let total = 0;

    for (let i = 0; i < k; i++) {
        const l = left.size()  > 0 ? left.peek()  : Infinity;
        const r = right.size() > 0 ? right.peek() : Infinity;

        if (l <= r) {
            total += left.pop();
            if (lo <= hi) left.push(costs[lo++]);   // refill from left
        } else {
            total += right.pop();
            if (lo <= hi) right.push(costs[hi--]);  // refill from right
        }
    }

    return total;
};

console.log(totalCost(costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4));
