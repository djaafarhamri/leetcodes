/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let ans = []
    for (let i=0;i<operations.length;i++) {
        if (operations[i] === '+') {
            ans.push(parseInt(ans[ans.length-1]) + parseInt(ans[ans.length-2]))
        } else if (operations[i] === 'C') {
            ans.pop()
        } else if (operations[i] === 'D') {
            ans.push(ans[(ans.length-1)]*2)
        } else if (typeof parseInt(operations[i]) === "number") {
            ans.push(parseInt(operations[i]))
        }
    }

    let result = 0;
    for (let i=0;i<ans.length;i++) {
        result += ans[i]
    }
    return result;
};


