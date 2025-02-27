//my attemp at function intersecting arrays
const array1 = [1, 2, 4, 5, 6, 7];
const array2 = [5, 6, 7, 8, 9, 10, 11, 12];


const intersectionOfArrays = (array1, array2) => {
    let interSection = [];
    let hashTable = {};
    let biggerArray;
    let smallerArray;

    if (array1.length > array2.length) {
        biggerArray = array1;
        smallerArray = array2;
    }
    else {
        biggerArray = array2;
        smallerArray = array1;
    }
    for (const value of biggerArray) {
        hashTable[value] = true;
    }

    for (const value of smallerArray) {
        if (!hashTable[value] || hashTable === undefined) {
            console.log('nie ma intersection')
        }
        else {
            interSection.push(value)
        }

    }
    console.log(interSection);
    return interSection;

}

intersectionOfArrays(array1, array2);
