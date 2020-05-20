/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let count = 0;
    if(m===0){
         nums1.length = 0;
        nums1.splice(0, 0, ...nums2);
        return;
    }
    for(let i=0; i < nums1.length;){
        if(nums2[0] <= nums1[i]){
            nums1.splice(i, 0, nums2[0]);
            nums2.splice(0, 1);
            count++;
        } 
        if(nums2[0] > nums1[i] && (nums1[i+1] > nums2[0] || i === m-1 + count)){
            nums1.splice(i+1, 0, nums2[0]);
            nums2.splice(0, 1);
            count++;
        }
        i++;
    }
    nums1.length = m+n;
};