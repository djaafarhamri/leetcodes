/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let result = 0;
    while (r !== l) {
        if (height[l] > height[r]) {
            if (height[r] * (r - l) > result) {
                result = height[r] * (r - l);
            }
            r--;
        }
        else if (height[l] <= height[r]) {
            if (height[l] * (r - l) > result) {
                result = height[l] * (r - l);
            }
            l++
        }
        
    }
    return result;
};

// console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49
// console.log(maxArea([1,1])) // 1
console.log(maxArea([1,2,1])) // 2
