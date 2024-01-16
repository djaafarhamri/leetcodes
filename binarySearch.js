/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function(nums, target) {
    let e = nums.length - 1
    let s = 0
    let m;
    while (s <= e) {
        m = Math.floor((e+s)/2)
        if (target > nums[m]) {
            s = m + 1;
        } else if (target < nums[m]) {
            e = m - 1;
        } else {
            return m
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9))
