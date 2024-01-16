/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Done
var findKthLargestWithSort = function(nums, k) {
    let sortedNums = nums.sort((a,b) => b - a);
    return sortedNums[k-1];
};

// Pending
var findKthLargestWithQuickSelect = function(nums, k) {

}



var findKthLargest = function(nums, k) {
    findKthLargestWithSort(nums, k);
}
console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4

