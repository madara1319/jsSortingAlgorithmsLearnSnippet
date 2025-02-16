//My attemp at writing bubbleSort()

const array = [5, 1, 23, 6, 33, 11, 2, 6, 13, 9]

const bubbleSort = (array) => {
    let isSorted = false;
    while (!isSorted) {
        isSorted=true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                //console.log(`array[i]=${array[i]} is bigger than array[i+1]=${array[i+1]}`);
                const temp = array[i]
                array[i] = array[i + 1];
                array[i + 1] = temp
                console.log("swap")
                isSorted = false;
            }
            else {
                console.log("bez swapa");
            }
        }
    }

}
console.log(`array = ${array}`);
bubbleSort(array)

console.log(`array = ${array}`);

