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

		



	return biggestValue;
}

console.log(biggestValueEqualToOccurence([3,8,2,3,3,2]));


//const diverseWordBuilder=()=>(numberOfA, numberOfB, numberOfC)
//{
//	let builtWord;
//	const letterA='a';
//	const letterB='b';
//	const letterC='c';
//	let numberOfA=1;
//	let numberOfB=2;
//	let numberOfC=3;
//	const wordLength=numberOfA+numberOfB+numberOfC;
//	counterOfA=numberOfA;
//	counterOfB=numberOfB;
//	counterOfC=numberOfC;
//	console.log(`mam ${numberOfA} sztuk A,${numberOfB} sztuk B oraz ${numberOfC} sztuk C `);
//	while(counterOfA||counterOfB||counterOfC)
//	{
//		for (let i=0; i<wordLength;i++)
//		{
//			if(i>=2)
//			{
//				if(builtWord.charAt(i-1)==letterA && buildWord.charAt(i-2)==letterA)
//				{
//					builtWord.concat(letterB);
//				}
//			}
//		}
//	}
//}


let mergeArray=(array1,array2)=>
{
  let newArray=[];
  let array_1_pointer=0;
  let array_2_pointer=0;
  while (array_1_pointer<array1.length || array_2_pointer<array2.length)
  {
    /*boundary for all element this will be false and inside wont be executed
    if array_1_pointer will equal lenght which exceeds the array values so its zero 
    the negation of this will give true and we will go into this inside
    and execute this as if array 1 values ended and we have to push array 2 elements
    also increment array_2_pointer the same does second else if as if we finished array 2
    
      */
    if (!array1[array_1_pointer])
    {
      newArray.push(array2[array_2_pointer]);
      array_2_pointer++;
    }
    else if (!array2[array_2_pointer])
    {
      newArray.push(array1[array_1_pointer]);
      array_1_pointer++;
    }
    /*This if and else are main steps through elements element from one array is larger we push lower element 
    to the final array and else does the same 

      */
    else if (array1[array_1_pointer]<array2[array_2_pointer])
    {
      newArray.push(array1[array_1_pointer]);
      array_1_pointer++;
    }
    else
    {
      newArray.push(array2[array_2_pointer]);
      array_2_pointer++;
    }
  }
  return newArray;
}

console.log(`Merge 2 posortowanych tablic [100,101,123,256] i [1,12,35,46,59,69,99] wynosi mergeArray ${mergeArray([100,101,123,256],[1,12,35,46,59,69,99])}`) ;
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
