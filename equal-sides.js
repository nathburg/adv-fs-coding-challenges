//input is array of integers
//return first index in array where sum of ints to left of index and sum of ints to right of it are equal
//indexed value is not included in sums
//if no index does this, return -1
//if array is empty, return 0

//for loop goes length of array
//only reason to start at first index is to return 0 if array is empty, if possible
//for index i
//spread array in copy to not mutate original
//bind sliced copy from 0 to index
//bind sliced copy from index + 1 to end of array
//return i if reduced sum of first half equals reduced sum of second half
//return -1 if we exit the loop

// function equalSides(numbers) {
// 	if (numbers.length === 0) return 0;
// 	for (i = 0; i < numbers.length; ++i) {
// 		const firstHalf = numbers.slice(0, i);
// 		const secondHalf = numbers.slice(i + 1, numbers.length);
// 		if (
// 			firstHalf.reduce((prev, curr) => prev + curr, 0) ===
// 			secondHalf.reduce((prev, curr) => prev + curr, 0)
// 		)
// 			return i;
// 	}
// 	return -1;
// }

////////////////////////

// simpler idea with O(n) time
//instead of reduce, we have two sums that are being modified
//firstHalf and secondHalf get initialized beforehand
//firstHalf initializes as 0
//secondHalf initializes as the sum of all the elts in the array minus first elt
//add value at index i-1 to firstHalf
//subtract value at index from secondHalf

function equalSides(numbers) {
	let firstHalf = 0;
	let secondHalf =
		numbers.reduce((prev, curr) => prev + curr, 0) - numbers[0];
	if (numbers.length === 0 || firstHalf === secondHalf) return 0;
	for (i = 1; i < numbers.length; ++i) {
		firstHalf += numbers[i - 1];
		secondHalf -= numbers[i];
		if (firstHalf === secondHalf) return i;
	}
	return -1;
}

console.log('3 = ', equalSides([1, 2, 3, 4, 3, 2, 1]));
console.log('0 = ', equalSides([]));
console.log('1 = ', equalSides([1, 100, 50, -51, 1, 1]));
console.log('0 = ', equalSides([20, 10, -80, 10, 10, 15, 35]));
