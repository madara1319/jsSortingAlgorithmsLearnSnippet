let test__array = [30,29,28,26,27,20,19,18,17,16,15,14,13,12,10,9,8,7,6,5, 4, 3, 2, 1];
let reverse_array=test__array.reverse();

function linearSearch(array,value){
    const Len=array.length;
    for (let i=0; i<Len; i++)
    {
        console.log(`step ${i}`);
        if(array[i]===value)
        {
            console.log(`index ${i} value ${array[i]}`);
        }

    }
}


function binarySearch(array,value, start=0, end=array.length-1){
    //let Len=array.length;
    let middle=Math.floor((start+end)/2);
    console.log(`start ${start} end ${end} middle ${middle}`)
    if (start > end){
        console.log("false");
        return false;
    }
    if(array[middle]===value)
    {
        console.log(`found value middle ${middle} & array[middle] ${array[middle]}`);
        return true;
    }
    if(array[middle]>value)
    {
        return binarySearch(array, value, start,middle-1);
        console.log('test')
    }
    else{
        return binarySearch(array, value, middle+1, end)
    }
    
console.log("testestset");
}

function selectionSort(array){
    let lowestValue=array[0];
    for (let i=0; i<array.length; i++){
        if (array[i]<lowestValue){
            lowestValue=array[i];
            a
        }
    }
}

//linearSearch(test__array,1);
binarySearch(test__array,1,0,test__array.length-1);
binarySearch(reverse_array,1,0,test__array.length-1);
