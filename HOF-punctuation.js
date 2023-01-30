//function takes a string of punctuation
//returns a function that takes any string and returns the punctuation at the end of that string

function addPunctuation(puncString) {
	return (string) => string + puncString;
}

const addExcitement = addPunctuation('!!!');
console.log(addExcitement('Hello World'));

const addUnsure = addPunctuation('?!?');
console.log(addUnsure('Hello World'));
