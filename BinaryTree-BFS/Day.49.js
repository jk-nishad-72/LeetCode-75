/**1161. Maximum Level Sum of a Binary Tree
 Definition for a binary tree node.
 *
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

  const root = new TreeNode(5)

  root.left  = new TreeNode(3 , 7 ,8)
  root.right  = new TreeNode(2 , 6 ,9)

  const root2 = new TreeNode(1)
  root2.left = new TreeNode(7 , 7 ,-8)
  root2.right = new TreeNode(0)

  console.log(root2);
  
 var maxLevelSum = function(root) {
    let queue = [root];
    let maxSum = -Infinity;
    let level = 1;
    let answer = 1;

    while (queue.length > 0) {
        let size = queue.length;
        let currentSum = 0;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            currentSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            answer = level;
        }

        level++;
    }

    return answer;
};

console.log(maxLevelSum(root));
console.log(maxLevelSum(root2));



