
//Sorting algorithms
//----------------------------------------------------------------
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


//console.log(findMissingAlphabetLetter("the quick brown box jumps over a lazy dog"))
//console.log(findDuplicatesInString(["a","b","c","d","e","f","c","g","h","i","d"]));
//console.log(intersectionOfArrays([1,2,3,4,5],[0,2,4,5,6,8]));

//console.log(intersectionOfArrays(["a","b","c","d","e","f"],["b","d","f"]));

//console.log(findNeedle("def","abcdefghi"));
//console.log(`Merge 2 posortowanych tablic [100,101,123,256] i [1,12,35,46,59,69,99] wynosi mergeArray ${mergeArray([100,101,123,256],[1,12,35,46,59,69,99])}`) ;
//console.table(test__array);

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

//------------------------------------------------------------------------
//hashmaps maps etc
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

//------------------------------------------------------------------------
//Stacks and Queues
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
    return this.data.pop();
  }
  get read()
  {
    return this.data.slice(-1)[0];
  }

}



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
          console.log(`${element} doest have opening brace`);
          return 0 
        }
      //if popped opening brace doesnt match the current closing brace we produce an error
        else if (this.#is_not_a_match(popped_opening_brace,element))
        {
          console.log(`${element} has mismatched opening brace`)
          return 0 
        }
      }
    })
    if (this.stack.read)
    {
      console.log(`${this.stack.read} does not have closing brace`);
      return 0 
    }
    //console.log("true");
    return 1
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



class Queue 
{
  constructor(){
    this.data=[];
  }
  enqueue(element)
  {
    this.data.push(element);
  }
  dequeue()
  {
    return this.data.shift();
  }
  get read()
  {
    return this.data.slice(0,1)[0];
  }

}



//const testQueue=new Queue();
//testQueue.push(1);
//testQueue.push(2);
//testQueue.push(3);
//testQueue.push(4);
//testQueue.push(5);
//console.log(testQueue.read);
//console.log(testQueue.pop());
//
//console.log(testQueue.read);
//console.log(testQueue.pop());
//
//console.log(testQueue.read);
//console.log(testQueue.pop());
//const linter= new Linter();
//linter.lint(" ( var x = { y: [ 1 , 2 , 3 ] } )");

//linter.lint("([  var x = { y: [ 1 , 2 , 3 ] } )");

class PrintManager 
{
  constructor()
  {
    this.queue=new Queue();
  }
  queuePrintJob(document)
  {
    this.queue.enqueue(document);
  }
  run()
  {
    //each time this loop runs we read the document ath the front of the queue
    while (this.queue.read)
    {
      this.#print(this.queue.dequeue());

    }

  }
  #print(document)
  {
    //code to run the actual printer would go here
    console.log(document);
  }
}


//print_manager=new PrintManager();
//print_manager.queuePrintJob("First Document");
//print_manager.queuePrintJob("Second Document");
//print_manager.queuePrintJob("Third Document");
//print_manager.run();
//print_manager.queuePrintJob("Document26");
//
//print_manager.queuePrintJob("Document56");
//print_manager.run();



function reverseAString(string)
{
  let newString=""; 
  const stackString=new Stack();
  string.split("").forEach((element)=>{
    
    stackString.push(element);

  })

  while(stackString.read)
  {
    newString+=`${stackString.pop()}`;
  }
  return newString;
}


//console.log(reverseAString("!dlroWolleH"));

//------------------------------------------------------------------------
//Recursive chapters
//import filesystem module & path module
const fs=require('fs');
const path=require('path');
function findOneLevelDirectories(directory)
{
  fs.readdirSync(directory).forEach((filename)=>{
    const filePath=path.join(directory,filename);
    if(fs.statSync(filePath).isDirectory() && filename!=="." && filename!==".."){
      console.log(filePath);

    }
  });

}


function findTwoLevelDirectories(directory)
{
  fs.readdirSync(directory).forEach((filename)=>{
    const filePath=path.join(directory,filename);

    if(fs.statSync(filePath).isDirectory() && filename!=="." && filename!==".."){
      console.log(filePath);

      fs.readdirSync(path.join(directory,filename)).forEach((innerFilename)=>{
        const innerFilePath=path.join(directory,filename,innerFilename);
        if (fs.statSync(innerFilePath).isDirectory() && innerFilename !== "." && innerFilename !==".."){
          console.log(innerFilePath);
        }
      });

    }
  });

}


function findDirectories(directory)
{
  fs.readdirSync(directory).forEach((filename)=>{
    const filePath=path.join(directory,filename);
    if(fs.statSync(filePath).isDirectory() && filename!=="." && filename!==".."){
      console.log(filePath);
      findDirectories(filePath);
    }
  });

}



//findOneLevelDirectories('C:/dev/');

//findTwoLevelDirectories('C:/dev/');
//findDirectories('C:/dev/');


function sumNumbersBetweenTwoValues(low,high)
{
  if (low==high)
  {
   // console.log(low);
    return low;
  }
 //console.log( high + sum(low,high-1));
  return (high + sum(low,high-1));
}


//console.log(sumNumbersBetweenTwoValues(1,10));

function printNestedArrayContents(array)
{
  for (const element of array)
  {
    if (Number.isInteger(element))
    {
      
      //basecase element of array is number
      console.log(element);
    }
    else
    {
      
      printNestedArrayContents(element);
    }
  }
}


//console.log(double_array([1,2,3,4,5]));
//taskArray=[1,
//  2,
//  3,
//  [4,5,6],
//  7,
//  [8,
//    [9,10,11,
//      [12,13,14]
//    ]
//  ],
//  [15,16,17,18,19,
//    [20,21,22,
//      [23,24,25,
//      [26,27,29]
//      ],30,31
//    ],32
//  ],33
//];
//
//
//taskArray2=[1,2,3,[12,15,[2,[123,[345],125,[125,346],226],1156],34643],12515,34643,[125,124,[44,12],235],33];

//console.table(taskArray);

//printNestedArrayContents(taskArray);

//printNestedArrayContents(taskArray2);


function double_array(array,index=0)
{
  //base case when index goes to end
  if(index>=array.length)
  {
    return array;
  }
  array[index]*=2;
  return double_array(array,index+1);

}



function reverseAStringRecursive(testString)
{
  if (testString.length==1)
  {
    return testString[0];
  }
  return (
    reverseAStringRecursive
    (
        testString.slice(1,testString.length)
    )+testString[0]);
}


//console.log(reverseAStringRecursive("abcde"));
//const chujString="abcde";
//const a=chujString.slice(1,chujString.length);
//const b=(chujString[0]);
//console.log(a+b);

function countOccurencesOfX(exampleString)
{
  if (exampleString.length==0)
  {
    return 0;
  }
  if (exampleString[0]=="x")
  {
    return (1+countOccurencesOfX(exampleString.slice(1,exampleString.length)));

  }
  else
  {
    return (countOccurencesOfX(exampleString.slice(1,exampleString.length)));
  }
}



//console.log(countOccurencesOfX("axbxcxd"));

function numberOfPaths(n)
{
  if(n<0)
  {
    return 0;
  }
  if (n==1||n==0)
  {
    return 1;
  }
  return (numberOfPaths(n-1)+numberOfPaths(n-2)+numberOfPaths(n-3));
}

//console.log(numberOfPaths(5));

function anagramGenerator(justSomeString) {
  if (justSomeString.length === 1) {
    return [justSomeString];
  }

  let collection = [];
  let substringAnagrams = anagramGenerator(justSomeString.slice(1));

  for (const element of substringAnagrams) {
    console.log("substringAnagrams: ");
    console.table(substringAnagrams);
    console.log("collection: ");
    console.table(collection);
    for (let i = 0; i <= element.length; i++) {
      let copy = element.slice(0, i) + justSomeString[0] + element.slice(i);
      console.log("element jest taki: " + element);
      console.log("element.slice(0,i) wynosi: " + element.slice(0,i) + " Zas element slice(i) wynosi: " + element.slice(i));
      console.log("justSomeString[0] wynosi: " + justSomeString[0]);
      console.log("kopia numero: " + i + " kopa anagramu to " + copy);
      console.log("_________________________________________________________");
      collection.push(copy);

    }

  }

  return collection;
}

//console.log(anagramGenerator("abc"));


function countCharactersOfStringsArray(stringsArray)
{
  if (stringsArray.length==1)
  {
    return stringsArray[0].length;
  }
  else if(stringsArray.length==0)
  {
    return 0;
  }
  else 
  {
    return stringsArray[0].length + countCharactersOfStringsArray(stringsArray.slice(1,stringsArray.length));
  }
}

//console.log(countCharactersOfStringsArray(["ab","c","def","ghi"]));

//console.log(countCharactersOfStringsArrar([]));

function filterOddNumbers(arrayOfNumbers)
{

  if (arrayOfNumbers.length==0)
  {
    return [];
  }
  else if (arrayOfNumbers[0]%2==0)
  {
    console.log("przypadek if: " + arrayOfNumbers.slice(1));
      return [arrayOfNumbers[0], ...filterOddNumbers(arrayOfNumbers.slice(1))];
  }
  else
  {
    console.log("przypadek else: " + arrayOfNumbers.slice(1));
    return (filterOddNumbers(arrayOfNumbers.slice(1)));
  }
}

//console.log("_________________________________");
//filterOddNumbers([1,2,3,4,5,6]);
//console.log(filterOddNumbers([1,2,3,4,5,6]));

/*triangular numbers 1,3,6,10,15,21 nex number is N + previous number*/
function triangularNumbers(exampleNumber)
{
  if (exampleNumber==0)
  {
    return 0;
  }
  else if(exampleNumber==1)
  {
    return 1;

  }
  else
  {
    return (exampleNumber+triangularNumbers(exampleNumber-1));
  }
}

//console.log(triangularNumbers(7));

function findXIndex(supposedString,currentIndex=0)
{
  if (supposedString[0]=="x")
  {
    return currentIndex;
  }
  else if (supposedString.length==0)
  {
    return -1;
  }
  else
  {
    return findXIndex(supposedString.slice(1),currentIndex+1);
  }
}
//console.log(findXIndex("abcdeaasdxasd"));


function UniquePaths(numberOfRows,numberOfColumns)
{
  //calculate shortest path from going to upper-leftmost to lower-rightmost
  if (numberOfRows==1 || numberOfColumns==1)
  {
    return 1;
  }
  else if (numberOfRows==0 || numberOfColumns==0)
  {
    return -1;
  }
  else
  {
    //subproblems are if u decrease one dimension and u gotta add solutions of the subproblems to get the problem result
    return (UniquePaths(numberOfRows,(numberOfColumns-1))+UniquePaths((numberOfRows-1),numberOfColumns));
  }
}

//console.log(UniquePaths(3,3));

function findArrayMaxValueWrong(simpleArray)
{
  console.log("RECURSION HAPPENED");

  if (simpleArray.length==1)
  {
    return simpleArray[0];
  }
  else if(simpleArray.length==0)
  {
    return -1;
  }
  else if(simpleArray[0]>findArrayMaxValueWrong(simpleArray.slice(1,simpleArray.length)))
  {
    return simpleArray[0];
  }
  else 
  {
    return findArrayMaxValueWrong(simpleArray.slice(1,simpleArray.length))
  }
}

//console.log(findArrayMaxValueWrong([1,2,3]));

function findArrayMaxValue(simpleArray)
{
  console.log("RECURSION HAPPENED");

  if (simpleArray.length==1)
  {
    return simpleArray[0];
  }
  else if(simpleArray.length==0)
  {
    return -1;
  }

  let maxValue=findArrayMaxValue(simpleArray.slice(1,simpleArray.length));
  if(simpleArray[0]>maxValue)
  {
    return simpleArray[0];
  }
  else 
  {
    return maxValue; 
  }
}
//for only 4 values i get 15 recursion function calls
//console.log(findArrayMaxValue([1,2,3,4]));

function fibonacciSequence(yourNumber)
{
  if (yourNumber==0 || yourNumber==1)
  {
    return yourNumber;
  }
  else
  {
    return (fibonacciSequence(yourNumber-1)+fibonacciSequence(yourNumber-2))
  }
}


//console.log(fibonacciSequence(10));

//memoization 1 of 2 optimizing techniques used in dynamic programming
function dynamicFibonacci(fibNumber,memo)
{
  if (fibNumber==0 || fibNumber==1)
  {
    return fibNumber;
  }
  else if (memo[fibNumber]==undefined)
  {
    memo[fibNumber]=dynamicFibonacci(fibNumber-2,memo)+dynamicFibonacci(fibNumber-1,memo);
  }

  return memo[fibNumber];
}

console.log(dynamicFibonacci(6,{}));




