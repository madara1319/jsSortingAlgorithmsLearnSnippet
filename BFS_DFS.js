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
let test = [];
for (let [key, value] of Object.entries(graph)) {
    test.push({ key, value });
}

//console.log(Object.keys(graph)[0])
//let shiftedElement=graph.shift()
//console.log(shiftedElement)
function DFS_graph_traversal(graph, start) {
    if (!graph) {
        return [];
    }
    let stack = [start];
    let result = [];
    let visited = new Set();

    while (stack.length) {
        let vertex = stack.pop();
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);
            for (const neighbor of graph[vertex]) {
                stack.push(neighbor)
            }
        }
    }
    return result;
}

console.log('DFS graph traversal: ' + DFS_graph_traversal(graph,'A'));

function BFS_graph_traversal(graph, start) {
    if (!graph) {
        return [];
    }
    let queue = [start];
    let result = [];
    let visited = new Set();

    while (queue.length) {
        let vertex = queue.shift();
        if (!visited.has(vertex)) {

            visited.add(vertex);
            result.push(vertex);
            for (const neighbor of graph[vertex]) {
                queue.push(neighbor);
            }
        }
    }
    return result;
}

console.log('BFS graph traversal: ' + BFS_graph_traversal(graph, 'A'))

function BFS_tree_traversal(node) {
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

function DFS_tree_traversal(node) {
    if (!node) {
        return [];
    }
    const stack = [node];
    const result = [];
    while (stack.length) {
        let currentNode = stack.pop();
        result.push(currentNode.value);
        if (currentNode.right) {
            stack.push(currentNode.right)
        }
        if (currentNode.left) {
            stack.push(currentNode.left)
        }
    }
    return result;
}


console.log('BFS traversal -> ' + BFS_tree_traversal(tree))
console.log('DFS traversal -> ' + DFS_tree_traversal(tree))




