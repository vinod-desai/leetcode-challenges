/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = [];
    function inOrderHelper(root) { 
        if (root !== null) {
            inOrderHelper(root.left);
            arr.push(root.val);
            inOrderHelper(root.right);
        }
        return arr;
    }
    inOrderHelper(root);
    return arr[k-1];
};