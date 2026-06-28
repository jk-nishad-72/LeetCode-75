

   console.log( ' Day 65 of LC75 challenge Graph ')

   /**399. Evaluate Division
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = new Map();
    // Step 1: Build graph
    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        let value = values[i];

        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);

        graph.get(a).push([b, value]);
        graph.get(b).push([a, 1 / value]);
    }
    // DFS function
    function dfs(src, target, visited) {
        if (!graph.has(src)) return -1.0;
        if (src === target) return 1.0;
        visited.add(src);

        for (let [neighbor, weight] of graph.get(src)) {
            if (!visited.has(neighbor)) {
                let result = dfs(neighbor, target, visited);
                if (result !== -1.0) {
                    return result * weight;
                }
            }
        }
        return -1.0;
    }

    // Step 2: Process queries
    let results = [];
    for (let [a, b] of queries) {
        let visited = new Set();
        results.push(dfs(a, b, visited));
    }
    return results;
};

console.log(calcEquation);
