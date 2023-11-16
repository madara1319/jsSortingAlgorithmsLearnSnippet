let selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
      if (i != lowestNumberIndex) {
        let temp = array[i];
        array[i] = array[lowestNumberIndex];
        array[lowestNumberIndex] = temp;
      }
    }
  }
  return array;
};

let bubbleSort = (array) => {
  let unsortedRightIndex = array.length - 1;
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < unsortedRightIndex; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSorted = false;
      }
    }
    unsortedRightIndex--;
  }
  return array;
};

let insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let temp_value = array[i];
    let position = i - 1;
    while (position >= 0) {
      if (array[position] > temp_value) {
        array[position + 1] = array[position];
        position = position - 1;
      } else {
        break;
      }
      array[position + 1] = temp_value;
    }
  }
  return array;
};

//console.log(`array to be sorted`);
//let test__array = [30,29,28,26,27,20,19,18,17,16,15,14,13,12,10,9,8,7,6,5, 4, 3, 2, 1];
//console.log(test__array.at(1));
//console.log(test__array.at(-1));
//const readline=require('readline');
//
//const rl=readline.createInterface({
//	input:process.stdin,
//	output:process.stdout
//});
//rl.question('What is your array',(answer)=>{
//	console.log(`Test123 ${answer}`);
//	rl.close();
//	
//});

const biggestValueEqualToOccurence=(array)=>
{
	let resultsArray=[];
	let valuesAsIndexesArray=[];
	let indexofBiggestValue=0;
	let biggestValue=array[0];
	for (let i=0; i<array.length; i++)
	{
		if(typeof(valuesAsIndexesArray[array[i]])=='undefined')
		{

			valuesAsIndexesArray[array[i]]=0;
		}
			valuesAsIndexesArray[array[i]]++;
		}
	for (let i=0; i<valuesAsIndexesArray.length; i++)
	{
		if (valuesAsIndexesArray[i]===i)
		{

			resultsArray.push(i);
			biggestValue=valuesAsIndexesArray[i];
			
		}
	}
	for (let value of resultsArray)
	{
		biggestValue=value;
		if(value>biggestValue)
		{

		biggestValue=value;
		}
	}

		



console.log(`Max value is ${biggestValue}`);	
console.table(resultsArray);	
	console.table(valuesAsIndexesArray);
}

biggestValueEqualToOccurence([3,8,2,3,3,2]);

//console.table(test__array);

//let startTimeInsertion=new Date();
//console.table(insertionSort(test__array));
//
//let endTimeInsertion=new Date();
//let timeElapsedInsertion=endTimeInsertion-startTimeInsertion;
//
//console.log(`InsertionSort time ${1000*timeElapsedInsertion}`);
// console.log('bubble Sort test');
//
//let startTimeBubble=new Date();
// console.table(bubbleSort(test__array));
//
//let endTimeBubble=new Date();
//let timeElapsedBubble=endTimeBubble-startTimeBubble;
//
//console.log(`BubbleSort time ${1000*timeElapsedBubble}`);
// console.log('Selection Sort test');
//
//let startTimeSelection=new Date();
// console.table(selectionSort(test__array));
//
//let endTimeSelection=new Date();
//let timeElapsedSelection=endTimeSelection-startTimeSelection;
//console.log(`SelectionSort time ${1000*timeElapsedSelection}`);
