/**2542. Maximum Subsequence Score D54
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();

        let top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    bubbleDown() {
        let i = 0;
        let n = this.heap.length;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}
var maxScore = function(nums1, nums2, k) {
    let n = nums1.length;
    let pairs = [];
    for (let i = 0; i < n; i++) {
        pairs.push([nums1[i], nums2[i]]);
    }
    // Sort by nums2 descending
    pairs.sort((a, b) => b[1] - a[1]);
    let heap = new MinHeap();
    let sum = 0;
    let maxScore = 0;
    for (let [n1, n2] of pairs) {
        heap.push(n1);
        sum += n1;
        if (heap.size() > k) {
            sum -= heap.pop();
        }
        if (heap.size() === k) {
            maxScore = Math.max(maxScore, sum * n2);
        }
    }
    return maxScore;
};

const minHeap = new MinPriorityQueue({ priority: x => x });