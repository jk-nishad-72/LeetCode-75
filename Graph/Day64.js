
console.log( ' Day 64 of LC75 challenge Graph ');


/**1466. Reorder Routes to Make All Paths Lead to the City Zero
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let graph = new Map();

    // Build graph
    for (let [u, v] of connections) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);

        graph.get(u).push([v, 1]); // original direction u -> v
        graph.get(v).push([u, 0]); // reverse edge
    }

    let visited = new Set();

    function dfs(node) {
        visited.add(node);
        let changes = 0;

        for (let [neighbor, cost] of graph.get(node)) {
            if (!visited.has(neighbor)) {
                changes += cost + dfs(neighbor);
            }
        }

        return changes;
    }

    return dfs(0);
};


console.log(minReorder( n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]));


