
console.log(' Day 63 of LC75 challenge Graph ');


/**547. Number of Provinces
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provinces = 0;
    function dfs(city) {
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                visited[neighbor] = true;
                dfs(neighbor);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(i);
            provinces++;
        }
    }
    return provinces;
};

console.log(findCircleNum(isConnected = [[1,1,0],[1,1,0],[0,0,1]]));
console.log(findCircleNum( isConnected = [[1,0,0],[0,1,0],[0,0,1]]));
