//function takes two strings
//convert strings to arrays
//bind first array's length and for loop at that length
//pop from first array
//get indexOf popped character from second array
//if indexOf is -1, return false
//else splice out that character from second array
//after loop, if both arrays are now empty, return true

function anagrams(wordOne, wordTwo) {
	const wordOneArr = wordOne.split('');
	const wordTwoArr = wordTwo.split('');
	const arrOneLength = wordOneArr.length;
	for (i = 0; i < arrOneLength; ++i) {
		const charOne = wordOneArr.pop();
		const index = wordTwoArr.indexOf(charOne);
		if (index < 0) return false;
		else wordTwoArr.splice(index, 1);
	}
	if (wordOneArr.length === 0 && wordTwoArr.length === 0) return true;
	else return false;
}

console.log('true = ', anagrams('superintended', 'unpredestined'));
console.log('false = ', anagrams('pictorialness', 'documentarily'));
