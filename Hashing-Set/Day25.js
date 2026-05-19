
/**2352. Equal Row and Column Pairs

 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {

   let columns = new Map();
   let count = 0;

    for(let i = 0;i< grid.length ;i++){
         let column = []
         for(let j = 0;j<grid[i].length;j++){
              
            column.push((grid[j][i]))
         }
           columns.set(i, column) 
    }

     for(let i = 0;i< grid.length ;i++){
         let row = []
         for(let j = 0;j<grid[i].length;j++){
              
            row.push((grid[i][j]))
         }
            
        
       for(let [key , values] of columns){
              let flag = true;
             for(let j = 0;j<grid.length;j++){
                if(row[j] !== values[j]) flag = false
             }

             if(flag) count++
       }

       
           
    }

    // console.log(count)

    return count;
    
    
};

console.log(equalPairs( grid = [[3,2,1],[1,7,6],[2,7,7]]))

console.log(equalPairs(grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]));
