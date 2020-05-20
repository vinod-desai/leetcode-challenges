/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let len = nums.length;
    if(len === 0){
        return 0;
    }
    let currMax = nums[0], max = nums[0];
    for(let i=1; i<len; i++){
        if(nums[i] === 1){
            currMax++;
        } else {
            currMax = 0;
        }
        if(currMax > max){
            max = currMax;
        }
    }
    return max;
};