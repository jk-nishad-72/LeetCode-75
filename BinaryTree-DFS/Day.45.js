let prompt = require('prompt-sync')();

console.log(' Day 45 of LC 75 challenge BS-DFS ');


//* Building a tree 

class Node{

    constructor(val){
        this.val = val
        this.left = this.right = null;
    }
}

class Tree {

     
     buildTree(){

        let data = Number(prompt('Enter Value: '))

        if(data === -1) return null;

        let root = new Node(data)

        console.log(`Ener the left data of ${root.val}: `)

        root.left = this.buildTree();

        console.log(`Ener the right data of ${root.val}: `)

        root.right = this.buildTree();
        return root
     }

     goodNodes(root){

        function dfs(node , max_so_far){

              if(!node) return 0
                 let count = 0
              if(node.val >= max_so_far) count = 1;

              let new_Max = Math.max(node.val , max_so_far)


              return count 
              +dfs(node.left , new_Max)
              +dfs(node.right , new_Max)
        }

         return  dfs(root, root.val)
    
   };


}

const tree1 = new Tree();

 const root = tree1.buildTree()

 const gooNodeAns = tree1.goodNodes(root);

 console.log(gooNodeAns)




/**1448. Count Good Nodes in Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */


// var goodNodes = 