/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    /* let count = 0;
    for(let i=0; i < nums.length; ++i){
        if(nums[i].toString().length % 2 === 0){
            count++;
        }
    }
    return count; */
    
    let counter = 0;
    nums.map(n => n.toString().length % 2 === 0 ? counter++ : '');
    return counter;
    
};