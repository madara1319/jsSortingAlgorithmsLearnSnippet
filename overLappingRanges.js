//task is to write function that will check array of ranges for overlapping
//for example for [[2,4],[5,6],[8,11]] it should return true
//and for [[1,3],[2,5]] it should return false

const testArrayOne=[[2,4],[5,6],[8,11]];
const testArrayTwo=[[1,3],[2,5]];
const testArrayThree=[[2,5],[1,3]];
const testArrayFour=[[5,6],[2,4],[8,11]];
const testArrayFive=[2,5,12,5,2,'a',false,'true','kaczka'];



//const testArrayThree=[[5,8],[1,3],[7,12],[3,2]];

const overlappingRanges=(array)=>{
    let indexesArray=[];
    for (const el of array){
        const start=el[0]
        const end=el[1]
        for(let i=start; i<=end; i++ ){
            if(!indexesArray[i])
            {
                indexesArray[i]=1
            }
            else{
                indexesArray[i]++;
                return false;
            }
        }
            
    }
    return true;
}

const checkIfRangesDontOverlap=(array)=>{
    array.sort((a,b)=>a[0]-b[0])
    for (let i=0; i<array.length-1; i++){
        if (array[i][1]>array[i+1][0])
        {
            return false;
        }
        
    }
    return true;
}


//console.log(testArrayThree);
//console.log(checkIfRangesOverlap(testArrayThree));
//console.log(testArrayThree);
//console.log(testArrayFour);
//console.log(checkIfRangesOverlap(testArrayFour));
//console.log(testArrayFour);
//overlappingRanges(testArrayThree)
console.log(testArrayOne);
console.log(overlappingRanges(testArrayOne))
console.log(testArrayTwo);
console.log(overlappingRanges(testArrayTwo))


//console.log(testArrayFive);
//testArrayFive.sort((a,b)=>a-b)
//
//console.log(testArrayFive);
