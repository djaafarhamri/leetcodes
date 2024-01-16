/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answers = [];
    let n = nums.length;
    let left = 1;
    for (let i=0;i<n;i++) {
        answers[i] = left;
        left *= nums[i]
    }
    let right = 1;
    for (let i=n-1;i>=0;i--){
        answers[i] *= right
        right *= nums[i]
    }
    
    return answers
};
