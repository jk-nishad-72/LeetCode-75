/**700. Search in a Binary Search Tree

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
     if(root == null ) return null
    if(root.val == val) return root;
    if(root.val > val){
    return searchBST(root.left,val) 
    }else if(root.val < val ){
    return searchBST(root.right , val)
    } 
};

const root = {
    val: 4,
    left: {     
        val: 2,
        left: {
            val: 1, 
            left: null,
            right: null
        },  
        right: {
            val: 3, 
            left: null,
            right: null
        }
    },
    right: {    
        val: 7,
        left: null,
        right: null
    }
}

console.log(searchBST(root, 2))
