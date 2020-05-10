/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let tempArray = new Array(N+1).fill(0);
    let trustArrayLen = trust.length;
    
    
    for(let i=0; i<trustArrayLen; i++){
        tempArray[trust[i][0]] = tempArray[trust[i][0]] - 1;
        tempArray[trust[i][1]] = tempArray[trust[i][1]] + 1;
    }
    for(let j=1; j <= tempArray.length; j++){
        if(tempArray[j]=== N-1){
            return j;
        }
    }
    return -1;
};