//
//	│ Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
//	│ Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
//
//󰛨 Example 2:
//
//	│ Input: root = [0,null,1]
//	│ Output: [1,null,1]

var convertBST = function(root) {
    let queue = root;
    let result = [];
    while (queue.length) {
        let currentValue = queue.shift()
        if (queue[1] !== null) {
            currentValue += queue[1];
        }
        result.push(currentValue);
    }
    return result;
};



//let testRoot=[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
//console.log(convertBST(testRoot))
