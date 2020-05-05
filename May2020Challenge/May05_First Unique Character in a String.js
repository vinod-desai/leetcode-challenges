/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let strLen = s.length;
    let dupExist;
    if(!s){
        return -1;
    }
    for(let i=0; i<strLen; i++){
        dupExist = false;
        for(let j=0; j<strLen; j++){
            if(i!==j && s[i] ===s[j]){
                dupExist = true;
                break;
            }
        }
        if(!dupExist){
            return i;
        } 
    }
    return -1;
};