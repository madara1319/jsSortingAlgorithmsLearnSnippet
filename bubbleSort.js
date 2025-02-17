//My attemp at writing bubbleSort()

const array = [5, 1, 23, 6, 33, 11, 2, 6, 13, 9]

const bubbleSort = (array) => {
    let isSorted = false;
    let unSortedRightIndex = array.length - 1
    while (!isSorted) {
        //array.length-1 cause lower i compare array[i] and array[i+1]
        //array[array.length+1] doesnt exist
        for (let i = 0; i < unSortedRightIndex; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1]
                array[i + 1] = temp
                isSorted = false;
                console.log("swap")
            }
            else {
                console.log("no swap")
                isSorted = true;
                console.log("change true")

            }
        }
        console.log("minus rightIndex")
        unSortedRightIndex--;

    }
}
console.log(`array = ${array}`);
bubbleSort(array)

console.log(`array = ${array}`);

