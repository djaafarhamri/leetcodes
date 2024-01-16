/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);
};

console.log("result 3 : ", climbStairs(3))
console.log("result 2 : ", climbStairs(2))
console.log("result 10 : ", climbStairs(44))
