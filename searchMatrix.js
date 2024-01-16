/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let s = 0;
    let l = matrix[0].length;
    let e = matrix.length * l - 1;
    let m;
    while (s <= e) {
        m = Math.floor((e+s)/2);
        if (target > matrix[Math.floor(m/l)][m%l]) s = m + 1;
        else if (target < matrix[Math.floor(m/l)][m%l]) e = m - 1;
        else return true
    }
    return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 3)); // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 13)); // false

