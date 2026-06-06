/**236. Lowest Common Ancestor of a Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null ) return null
    if(root.val === p.val || root.val === q.val ) return root;

        let left = lowestCommonAncestor(root.left , p, q)
        let right = lowestCommonAncestor(root.right , p ,q)

        if(left != null && right != null) return root;
        else if(left == null || right == null) return left != null ? left : right;
        else return null;
};

