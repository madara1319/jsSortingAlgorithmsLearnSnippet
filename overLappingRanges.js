//task is to write function that will check array of ranges for overlapping
//for example for [[2,4],[5,6],[8,11]] it should return true
//and for [[1,3],[2,5]] it should return false

const testArrayOne=[[2,4],[5,6],[8,11]];
const testArrayTwo=[[1,3],[2,5]];
const testArrayThree=[[5,8],[1,3],[7,12],[3,2]];

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

const overlappingRangesButBetter=(array)=>{
    array=array.sort()
    for (let i=0; i<array.length; i++){
        if (i[1]>i[])
        {
            console.log("blad")
        }
        else{
            console.log("ok");
        }
    }
}


console.log(testArrayThree);
overlappingRanges(testArrayThree)
//console.log(testArrayOne);
//console.log(overlappingRanges(testArrayOne))
//console.log(testArrayTwo);
//console.log(overlappingRanges(testArrayTwo))
