function createNode(value, left = null, right = null) {
    return { value, left, right }

}

const tree = createNode(1, createNode(2, createNode(4), createNode(5)), createNode(3, createNode(6), createNode(7)));
//console.log(tree)

function BFS(node) {
    if (!node) {
        return []
    }
    let queue = [node]
    let result = []

    while (queue.length) {
        let currentNode = queue.shift()
        result.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
    }
    return result;
}
//console.log(BFS(tree))
//

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



let testRoot=[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
console.log(convertBST(testRoot))


