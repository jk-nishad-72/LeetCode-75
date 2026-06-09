let prompt = require('prompt-sync')();
/*
 * 437. Path Sum III
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

class Tree {

    BuiltTree(){

         let data = Number(prompt(" Enter a Number:  "))

         if(data === -1 ) return null

         let root = new TreeNode(data);

        console.log(`Ener the left data of ${root.val}: `)
          root.left = this.BuiltTree();
           console.log(`Ener the right data of ${root.val}: `)
        root.right = this.BuiltTree();
        return root
        
    }
}

var pathSum = function(root, targetSum) {
    let total = 0;
    
    function countPaths(node) {
        if (node === null) return;
        findPathSum(node, targetSum, 0);
        countPaths(node.left);
        countPaths(node.right);
    }
    function findPathSum(node, targetSum, currentSum) {
        if (node === null) return;
        currentSum += node.val;
        if (currentSum === targetSum) {
            total++;
        }

        findPathSum(node.left, targetSum, currentSum);
        findPathSum(node.right, targetSum, currentSum);
    }

    countPaths(root);
    return total;
};


const tree1 = new Tree();

const root = tree1.BuiltTree()
console.log(root);

const ans = pathSum(root , 8)
console.log(ans);



