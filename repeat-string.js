//recursive function takes two params, a string and an integer n
//returns a string of the input string repeated n times

//define with input 0 return empty string
//define with others to return string plus repeat(string, n-1)

function repeat(txt, n) {
	if (n === 0) return '';
	return txt + repeat(txt, n - 1);
}

console.log('ababab = ', repeat('ab', 3));
console.log('kiwi = ', repeat('kiwi', 1));
console.log('cherrycherry = ', repeat('cherry', 2));
