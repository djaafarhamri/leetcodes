/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
 for (let i = nums[n]; i < nums.length; i++) {
     nums[i] = nums[i] + nums[i + n];
 }
    return nums;
};
console.log([2,5,1,3,4,7])
console.log(move([2,5,1,3,4,7], 1, 4))
