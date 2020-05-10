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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

var isCousins = function(root, x, y) {
    if( x <= 1 || y <= 1 ) return false;
    
    const getDeepnes = function( node, head = root, parent = root, level = 0 ){
        if( !head ) return false;
        
        if( head.val == node )
            return [parent, level];
        
        level++
        
        return getDeepnes( node, head.left, head, level ) || getDeepnes( node, head.right, head, level )
    }
    
    const [xParent, xLevel] = getDeepnes(x);
    const [yParent, yLevel] = getDeepnes(y);
    
    return ( xLevel == yLevel ) && ( xParent.val != yParent.val )
};
