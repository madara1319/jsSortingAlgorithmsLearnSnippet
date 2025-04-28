//
//	│ Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
//	│ Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
//
//󰛨 Example 2:
//
//	│ Input: root = [0,null,1]
//	│ Output: [1,null,1]

//var convertBST = function(root) {
//    let queue = root;
//    let rootCopy = root;
//    let result = [];
//    while (queue.length) {
//        let currentValue = queue.shift()
//        if (currentValue !== null) {
//            for (let i=1; i<queue.length; i+=2)
//            {
//                if (queue[i]!==null){
//                    console.log(`przejscie ${i} currentValue = ${currentValue} queue[i] = ${queue[i]}`);
//                    currentValue += queue[i];
//                    console.log(`_____________________________`);
//                    console.log(`po dodaniu currentValue = ${currentValue} q queue.length = ${queue.length} `);
//                    console.log(`_____________________________`);
//                }
//            }
//        }
//        result.push(currentValue);
//    }
//    return result;
//};
//dziala na tablicach nie na treeNode
var convertBST = function(root) {
    let queue = [...root];
    let result = [];

    while (queue.length) {
        let currentValue = queue.shift()
        let newValue = currentValue;
        if (currentValue !== null) {
           for (let i=0; i<root.length; i++){
                if (currentValue<root[i]){
                    console.log(`i = ${i} currentValue = ${currentValue} root[i] = ${root[i]} newValue = ${newValue}`)
                    newValue+=root[i]
                    console.log(`_______________________________`);
                    console.log(`po dodaniu currentValue = ${currentValue} newValue = ${newValue} root.length = ${root.length} `)
                    console.log(`_______________________________`);

                }
           } 
        }


        result.push(newValue);
    }
    return result;
};



let testRoot=[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
console.log(convertBST(testRoot))
