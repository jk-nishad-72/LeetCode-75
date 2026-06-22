
console.log(' Day 59 of LC75 Challenge Intervals ');
/**452. Minimum Number of Arrows to Burst Balloons
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0) return 0;

    // Step 1: Sort by end
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let arrowPos = points[0][1];

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > arrowPos) {
            arrows++;
            arrowPos = points[i][1];
        }
    }

    return arrows;
};

console.log(findMinArrowShots(points = [[10,16],[2,8],[1,6],[7,12]]));
