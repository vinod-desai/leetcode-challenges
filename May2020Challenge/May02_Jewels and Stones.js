/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const len = J.length;
    
    let count = 0;
    for(let i=0; i < len; i++){ 
    count += (S.match(new RegExp(J[i], "g")) || []).length;
    }
    return count;
};