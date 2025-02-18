//My attemp at writing selectionSort()

const array = [5, 1, 23, 6, 33, 11, 2, 6, 13, 9]


const selectionSort = (array) => {
    for (let j = 0; j < array.length - 1; j++) {
        let lowestValueIndex = j
        //let temp = array[lowestValueIndex];
        for (let i = j + 1; i < array.length; i++) {
            if (array[i] < array[lowestValueIndex]) {
                console.log(array[lowestValueIndex]);
                lowestValueIndex = i;
            }
        }
        let temp = array[j]
        array[j] = array[lowestValueIndex];
        array[lowestValueIndex] = temp;
    }
}


const descendingSelectionSort = (array) => {
    for (i = 0; i < array.length - 1; i++) {
        highestValueIndex = i
        for (j = i + 1; j < array.length; j++) {
            if (array[j] > array[highestValueIndex]) {
                highestValueIndex = j
            }
        }
        let temp=array[i] 
        array[i]=array[highestValueIndex]
        array[highestValueIndex]=temp
    }
}











console.table(array)
descendingSelectionSort(array);
console.log(`nowe array to ${array}`)
