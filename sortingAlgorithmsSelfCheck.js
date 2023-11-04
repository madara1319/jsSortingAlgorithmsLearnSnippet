let selectionSort=(array)=>
{
for (let i=0; i<array.length-1; i++)
	{
	let lowestNumberIndex=i;
	for(let j=i+1; j<array.length; j++)
	{
		if(array[j]<array[lowestNumberIndex])
		{
			lowestNumberIndex=j;
		}
		if(i!=lowestNumberIndex)
		{
			let temp=array[i];
			array[i]=array[lowestNumberIndex];
			array[lowestNumberIndex]=temp;
		}
	}
	}
	return array;
}

let bubbleSort=(array)=>
{
	let unsortedRightIndex=array.length-1;
	let isSorted=false;
	while (!isSorted)
	{
		isSorted=true;

		for (let i=0; i<unsortedRightIndex; i++)
		{
			if(array[i]>array[i+1])
			{
				let temp=array[i];
				array[i]=array[i+1];
				array[i+1]=temp;
				isSorted=false;
			}
		}
		unsortedRightIndex--;
	}
	return array;

}
console.log(`array to be sorted`);
console.table([5,4,3,2,1]);


console.log('bubble Sort test');
console.table(bubbleSort([5,4,3,2,1]));
console.log('Selection Sort test');
console.table(selectionSort([5,4,3,2,1]));
