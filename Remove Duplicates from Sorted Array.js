/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length-1;){
        if(nums[i] === nums[i+1]){
            nums.splice(i, 1);
            i = i;
        } else {
            i = i+1;
        }
    }
    return nums.length;
};