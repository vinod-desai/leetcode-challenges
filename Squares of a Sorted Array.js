/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    //A = A.map(n => n * n);
    //A.sort((a, b) => a-b);
    return A.map(n => n * n).sort((a, b) => a-b);
};