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

//console.log(biggestValueEqualToOccurence([3,8,2,3,3,2]));


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
    if array_1_pointer will equal length which exceeds the array values so its zero 
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

let findNeedle=(needle,haystack)=>
{
  needleStartIndex=0;
  /*
  if needleStartIndex starts on the difference between these lenghts
  it will end on the haystack end which will mean needle was moved max
  to the right
    */
  while (needleStartIndex<=haystack.length-needle.length)
  {
    /*
    If first character of needle is the same in haystack we enter loop and check 
    the following characters if they also gonna match 
      */
    if (needle[0]==haystack[needleStartIndex])
    {
      /*
        offset is for iterating over next characters in needle
        */
      let needleOffset=0;
      while (needleOffset<needle.length)
      {
        /*
        if following characters dont match we break from loop. If all characters matched 
        offset will be the lenght of needle -1 because last index incerement 1 lower

          */
        if (needle[needleOffset]!=haystack[needleStartIndex+needleOffset])
          break;
        else
        {
          if (needleOffset===needle.length-1)
            return true;
        }
        /*
        we increment offset as we move forward with matching characters
          */
        needleOffset+=1;
      }
      /*
      If we dont get matching first character we need to move forward haystack
      and increment startingIndex
        */
    }
    needleStartIndex+=1;
  }
  /*
  If we dont find out string in main string it returns false
    */
  return false;
}
/*I sure understand that its O(N^3) but that innermost loop would run N/4 times
as the book says im not so sure but whatever
  */
function largestProduct(array){
  let largestProductSoFar=array[0]*array[1]*array[2];
  let i=0;
  let overallICounter=0;
  let overallJCounter=0;
  let overallKCounter=0;
  while (i<array.length)
  {

  overallICounter+=1

    let j=i+1;
    console.log(`To jest krok i = ${i}`);
    while(j<array.length)
    {
      overallJCounter+=1;
    console.log(`To jest krok j = ${j}`);
      let k=j+1;
      while(k<array.length)
      {
      overallKCounter+=1;
    console.log(`To jest krok k = ${k}`);
        if(array[i]*array[j]*array[k]>largestProductSoFar)
          largestProductSoFar=array[i]*array[j]*array[k];
        console.log(`largestProductSoFar wynosi => ${largestProductSoFar}`);
      k+=1;
      }
    j+=1;
    }
  i+=1;
  }
  console.log(`overallICounter equals ${overallICounter} overallJCounter equals ${overallJCounter} overallKCounter equals ${overallKCounter}`);
  return largestProductSoFar;

}
//console.log(largestProduct([1,2,3,4,5]));

//write a function that returns the intersections of two arrays [1,2,3,4,5] 
//[0,2,4,5,8] result [2,4]

function intersectionOfArrays(array1,array2)
{
  let largerArray;
  let smallerArray;
  let hashTable={};
  let interSection=[];
//not sure if size domination matters in this case
  if(array1.length>array2.length)
  {
    largerArray=array1;
    smallerArray=array2;
}
  else
{
  largerArray=array2;
  smallerArray=array1;
}
for (const value of largerArray)
{
  hashTable[value]=true;
}
//console.table(hashTable);
for (const value of smallerArray)
{
  if (!hashTable[value] || hashTable===undefined)
  {
    //console.log("chuj");
    //return false;
  }
  else{

interSection.push(value)
  }
}
//console.table(interSection);
return interSection;
}

function findDuplicatesInString(arrayOfStrings){
  let hashTable={};
  for (const element of arrayOfStrings)
  {
    if (hashTable[element])
    {
      console.log("Yoo first duplicate: " + element);
      return hashTable;
    }
    else{

    hashTable[element]=true;
    }
  }
}

function findMissingAlphabetLetter(inputString)
{
  //part for creating alphabet map structure with false in letter values
  let alphabet={};
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  const alphabetMap={};
  for (const letter of alphabet)
  {
      alphabetMap[letter]=false;
  }
  //put letters from string as true in alphabetMap 
  let lettersRegex=/[a-z]/g;
  let charactersFromInputString=inputString.match(lettersRegex);
  for(const letter of charactersFromInputString)
  {
      alphabetMap[letter]=true;
  }
  //find missing alphabet letters
  for (const letter in alphabetMap)
  {
    if(!alphabetMap[letter])
    {
      return letter;
    }
  }
}

function findFirstNonDuplicatedCharactersInAString(inputString)
{
  const charactersMap={};
  const lettersRegex=/[a-z]/gi;
  const charactersFromInputString=inputString.match(lettersRegex);
  for (const character of charactersFromInputString)
  {
    if(charactersMap[character])
    {
      charactersMap[character]+=1;
    }
    else if(charactersMap[character]==undefined){
      charactersMap[character]=1;
    }
  }
for(const letter in charactersMap)
{
  if (charactersMap[letter]==1)
  {
    return letter;
  }
}
}

class Stack
{
  constructor(){
    this.data=[];
  }
  push(element)
  {
    this.data.push(element);
  }
  pop()
  {
    this.data.pop();
  }
  get read()
  {
    return this.data.slice(-1)[0];
  }

}


class Linter
{
  constructor()
  {
    this.stack=new Stack();
  }
  lint(text)
  {
    text.split("").forEach((element)=>{
      if (this.#is_opening_brace(element))
      {
        this.stack.push(element);
      }
      else if (this.#is_closing_brace(element))
      {
        //pop from stack
        const popped_opening_brace=this.stack.pop();
      
      //if the stack was empty so what we popped was nil it means an opening brace is missing
      if (!popped_opening_brace)
      {
        return `${element} doest have opening brace`
      }
      //if popped opening brace doesnt match the current closing brace we produce an error
      if (this.#is_not_a_match(popped_opening_brace,element))
      {
        return `${element} has mismatched opening brace`
      }
      }
    })
    if (this.stack.read)
    {
      return `${this.stack.read} does not have closing brace`
    }
    //console.log("true");
    return true;
  }
  #is_opening_brace(element)
  {
    return ["(","[","{"].includes(element);
  }
  #is_closing_brace(element)
  {
    return [")","]","}"].includes(element);
  }
  #is_not_a_match(openingBrace,closingBrace)
  {
    const closingBraceMap={
      "(":")",
      "[":"]",
      "{":"}"
    };
    return closingBrace!==closingBraceMap[openingBrace];
  }
}
const linter= new Linter();
//linter.lint(" ( var x = { y: [ 1 , 2 , 3 ] } )");

linter.lint("  var x = { y: [ 1 , 2 , 3 ] } )");

//const testStack=new Stack();
//testStack.push(2);
//testStack.push(5);
//testStack.push(125122);
//testStack.push(12);
//
//
//
//console.log(testStack.read);
//testStack.pop();
//
//console.log(testStack.read);
//console.log(findFirstNonDuplicatedCharactersInAString("minimum"));

//console.log(findMissingAlphabetLetter("the quick brown box jumps over a lazy dog"))
//console.log(findDuplicatesInString(["a","b","c","d","e","f","c","g","h","i","d"]));
//console.log(intersectionOfArrays([1,2,3,4,5],[0,2,4,5,6,8]));

//console.log(intersectionOfArrays(["a","b","c","d","e","f"],["b","d","f"]));

//console.log(findNeedle("def","abcdefghi"));
//console.log(`Merge 2 posortowanych tablic [100,101,123,256] i [1,12,35,46,59,69,99] wynosi mergeArray ${mergeArray([100,101,123,256],[1,12,35,46,59,69,99])}`) ;
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
