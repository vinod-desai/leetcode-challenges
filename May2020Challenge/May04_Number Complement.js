/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binaryNumLen = (num).toString(2).length;
    let complementNum = Array(binaryNumLen).fill(1).join('');
    return num ^ parseInt(complementNum, 2).toString(10);
};

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let str = num.toString(2).split('');
    for(let i=0; i<str.length; i++){
        if(str[i]==='0') str[i] = '1';
        else str[i]='0';
    }
    return parseInt(str.join(''),2);
};