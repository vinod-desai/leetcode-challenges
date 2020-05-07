/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let arrayLength = nums.length;
    if(arrayLength ===1 || arrayLength === 2){
        return nums[0];
    }
    nums = nums.sort( (a, b) => a - b);
    
    let majorityElmt = nums[0], minRepetitions = Math.round(arrayLength/2);
    
    let rep = 1, maxRepNum, currMaxRep = 1;
    
    for(let i=0; i < arrayLength - 1; i++){
        
            if(nums[i] === nums[i+1]){
                rep += 1;
            }
        
        if(rep >= minRepetitions && rep > currMaxRep){
            maxRepNum = nums[i];
            currMaxRep = rep;
            rep = 1;
        }
    }
    return maxRepNum;
};