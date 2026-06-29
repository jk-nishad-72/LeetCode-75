

console.log(' Day 66 of LC76 challenge Graphs-BFS ');

/**1926. Nearest Exit from Entrance in Maze
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let m = maze.length;
    let n = maze[0].length;
    let queue = [[entrance[0], entrance[1], 0]]; // row, col, steps
    let directions = [[1,0], [-1,0], [0,1], [0,-1]];
    // mark entrance as visited
    maze[entrance[0]][entrance[1]] = '+';

    while (queue.length > 0) {
        let [r, c, steps] = queue.shift();

        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;

            if (nr >= 0 && nr < m && nc >= 0 && nc < n && maze[nr][nc] === '.') {

                // check if it's an exit (boundary)
                if (nr === 0 || nr === m - 1 || nc === 0 || nc === n - 1) {
                    return steps + 1;
                }

                // mark visited
                maze[nr][nc] = '+';
                queue.push([nr, nc, steps + 1]);
            }
        }
    }

    return -1;
};

console.log( maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]);
