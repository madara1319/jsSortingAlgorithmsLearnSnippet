//Find biggest Value in an Array with value equal to its quantity

const array = [2, 4, 15, 4, 6, 12, 52, 33, 1, 4, 55, 3, 25, 15, 12, 33, 33, 2, 4, 1]

const biggestValueEqualToOccurence = (array) => {
    let biggestValue;
    let indexesArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        if (indexesArray[array[i]] === undefined || indexesArray[array[i]] === 0) {

            indexesArray[array[i]] = 1;
        }
        else {
            indexesArray[array[i]]++
        }
    }
    for (const keys of indexesArray.keys()) {
        if (keys===indexesArray[keys]){
            biggestValue=keys;
        }
    }
    return biggestValue;
}



console.log(array)
console.log(biggestValueEqualToOccurence(array))

