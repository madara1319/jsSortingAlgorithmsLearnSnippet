let test__array = [30, 29, 28, 26, 27, 20, 19, 18, 17, 16, 15, 14, 13, 12, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let reverse_array = test__array.reverse();

function linearSearch(array, value) {
    const Len = array.length;
    for (let i = 0; i < Len; i++) {
        console.log(`step ${i}`);
        if (array[i] === value) {
            console.log(`index ${i} value ${array[i]}`);
        }

    }
}


function binarySearch(array, value, start = 0, end = array.length - 1) {
    //let Len=array.length;
    let middle = Math.floor((start + end) / 2);
    console.log(`start ${start} end ${end} middle ${middle}`)
    if (start > end) {
        console.log("false");
        return false;
    }
    if (array[middle] === value) {
        console.log(`found value middle ${middle} & array[middle] ${array[middle]}`);
        return true;
    }
    if (array[middle] > value) {
        return binarySearch(array, value, start, middle - 1);
        console.log('test')
    }
    else {
        return binarySearch(array, value, middle + 1, end)
    }

    console.log("testestset");
}

function selectionSort(array) {
    let lowestValue = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < lowestValue) {
            lowestValue = array[i];
            a
        }
    }
}

//linearSearch(test__array,1);
//binarySearch(test__array, 1, 0, test__array.length - 1);
//binarySearch(reverse_array, 1, 0, test__array.length - 1);


function createNode(value, left = null, right = null) {
    return { value, left, right }

}

const tree = createNode(1, createNode(2, createNode(4), createNode(5)), createNode(3, createNode(6), createNode(7)));
//console.log(tree)
const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E']
}

//DFS ->stack BFS->queue
//
function BFS_tree_traversal(node) {
    if (!node) {
        return [];
    }
    let result = [];
    let queue = [node];
    while (queue.length) {
        let current = queue.shift();
        result.push(current.value)
        if (current.left) {
            queue.push(current.left)

        }
        if (current.right) {
            queue.push(current.right)
        }
    }
    return result;
}

function DFS_tree_traversal(node) {
    if (!node) {
        return [];
    }
    let result = [];
    let stack = [node];
    while (stack.length) {
        let current = stack.pop();
        result.push(current.value);
        if (current.right) {
            stack.push(current.right)
        }
        if (current.left) {
            stack.push(current.left)
        }
    }
    return result;
}

function BFS_graph_traversal(graph,start){
    if (!graph){
        return [];
    }
    let queue=[start];
    let result=[];
    let visited=new Set();

    while(queue.length){
        let vertex=queue.shift();
        if (!visited.has(vertex)){
            visited.add(vertex);
            result.push(vertex);
            for (const neighbor of graph[vertex]){
                queue.push(neighbor);
            }
        }
    }
    return result;
}

function DFS_graph_traversal(graph,start){
    if(!graph){
        return [];
    }
    let stack=[start];
    let result=[];
    let visited=new Set();

    while(stack.length){
        let vertex=stack.pop();
        if(!visited.has(vertex)){
            visited.add(vertex);
            result.push(vertex);
            for (const neighbor of graph[vertex]){
                stack.push(neighbor);
            }
        }
    }
    return result;
}

console.log(graph);
console.log(BFS_graph_traversal(graph,'A'))
console.log(DFS_graph_traversal(graph,'A'))

console.log(tree)
console.log(BFS_tree_traversal(tree));
console.log(DFS_tree_traversal(tree));





