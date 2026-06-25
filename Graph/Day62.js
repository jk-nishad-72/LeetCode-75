


console.log(' Day 62 of LC75 challenge Graph');


/**841. Keys and Rooms
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
     const visited = new Set();

    function dfs(room) {
        if (visited.has(room)) return;
        
        visited.add(room);
        
        for (let key of rooms[room]) {
            dfs(key);
        }
    }

    dfs(0);

    return visited.size === rooms.length;
};

console.log(canVisitAllRooms(rooms = [[1],[2],[3],[]]));
console.log(canVisitAllRooms(rooms = [[1,3],[3,0,1],[2],[0]]));
