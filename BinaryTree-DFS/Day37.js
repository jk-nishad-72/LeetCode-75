/**—>Q.872. Leaf-Similar Trees ✅
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var dfs = function(head , arr){

    if(head == null )return
     if(head.left === null && head.right === null){
         arr.push(head.val)
        return
     }
     dfs(head.left , arr)
     dfs(head.right , arr)
 }
var leafSimilar = function(root1, root2) {
    
    let arr1 = []
    let arr2 = []

    dfs(root1 , arr1)
    dfs(root2 , arr2) 

     if( arr1.length === arr2.length)  {
         for(let i = 0 ;i<arr1.length;i++){
             if(arr1[i] != arr2[i])return false
         }
         return true

    }else return false

};