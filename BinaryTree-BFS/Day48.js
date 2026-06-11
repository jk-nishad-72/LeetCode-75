/**199. Binary Tree Right Side View
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let ans = [];
    if(root == null ) return ans
    let q = [];
    q.push(root)
    while(q.length != 0 ){
         let size = q.length;
         let cur = [];
         for(let i = 0;i<size;i++){
             let node = q.shift();             
              if(i == size - 1 ) ans.push(node.val)
             if(node.left != null) q.push(node.left)
             if(node.right != null) q.push(node.right)
         }
    }
   return ans
    
};

