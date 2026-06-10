/**1372. Longest ZigZag Path in a Binary Tree
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
var longestZigZag = function(root) {
    let maxLength = 0;
    function dfs(node, direction, length) {
        if (!node) return;

        maxLength = Math.max(maxLength, length);

        if (direction === "left") {
            // last move was left → now go right
            dfs(node.right, "right", length + 1);
            dfs(node.left, "left", 1); // restart
        } else {
            // last move was right → now go left
            dfs(node.left, "left", length + 1);
            dfs(node.right, "right", 1); // restart
        }
    }
    dfs(root.left, "left", 1);
    dfs(root.right, "right", 1);

    return maxLength;
};

