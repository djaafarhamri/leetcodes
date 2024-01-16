/**
 * @param {number[]} nums
 * @return {number[]}
 */
var quickSort = function(nums, s, e) {
    if (e-s+1 <= 1) {
        return nums;
    }
    let pivot = nums[e]
    let left = s;
    for (let i=s;i<e;i++) {
        if (nums[i] <= pivot) {
            let temp = nums[left];
            nums[left] = nums[i];
            nums[i] = temp;
            left++;
        }
    }
    nums[e] = nums[left];
    nums[left] = pivot;
    
    quickSort(nums, s, left-1);
    quickSort(nums, left+1, e);

    return nums;
};

var sortArray = function(nums) {
    return quickSort(nums, 0, nums.length-1);
}

console.log(quickSort([6,2,4,1,3], 0, 4));
console.log(sortArray([5,2,3,1])); // [1,2,3,5]
console.log(sortArray([5,1,1,2,0,0])); // [0,0,1,1,2,5]
console.log(sortArray([-1,2,-8,-10])); // [-10,-8,-1,2]
