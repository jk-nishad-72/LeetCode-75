

console.log(' Day 58 of LC75 challenge Intervals ')


/**435. Non-overlapping Intervals
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // Step 1: Sort by end time
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let prevEnd = intervals[0][1];

    // Step 2: Traverse
    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i];

        if (start < prevEnd) {
            // Overlap → remove this interval
            count++;
        } else {
            // No overlap → update prevEnd
            prevEnd = end;
        }
    }

    return count;
};

console.log(eraseOverlapIntervals(intervals = [[1,2],[2,3],[3,4],[1,3]]));
