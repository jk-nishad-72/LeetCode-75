

/**450. Delete Node in a BST
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
 var leftMostOfrightSub = function(root){
    while(root != null && root.left != null ) {
        root  = root.left
    }
    return root
 }

var deleteNode = function(root, key) {
   if(root == null) return null
    else if(root.val > key) root.left = deleteNode(root.left , key )
    else if(root.val < key) root.right = deleteNode(root.right , key )
    else {

         if(root.left == null && root.right == null) return null;
         else if(root.right == null ) return root.left;
         else if(root.left == null) return root.right;
         else {
            let leftMost = leftMostOfrightSub(root.right)
            root.val = leftMost.val
            root.right = deleteNode(root.right, leftMost.val)

         }
    }
    return root  
};