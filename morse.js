const codes = [
	'.-',
	'-...',
	'-.-.',
	'-..',
	'.',
	'..-.',
	'--.',
	'....',
	'..',
	'.---',
	'-.-',
	'.-..',
	'--',
	'-.',
	'---',
	'.--.',
	'--.-',
	'.-.',
	'...',
	'-',
	'..-',
	'...-',
	'.--',
	'-..-',
	'-.--',
	'--..',
];
const alphArr = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

const uniqueWords = (words) => {
	const uniqueMorse = [];
	for (const word of words) {
		const charArr = word.split('');
		const indexArr = charArr.map((char) => alphArr.indexOf(char));
		const morseArr = indexArr.map((index) => codes[index]);
		const morseStr = morseArr.join('');
		if (!uniqueMorse.includes(morseStr)) uniqueMorse.push(morseStr);
	}
	return uniqueMorse.length;
};

console.log('2= ', uniqueWords(['gin', 'zen', 'gig', 'msg']));
console.log('3= ', uniqueWords(['gin', 'zen', 'gig', 'msg', 'fizzbuzz']));
console.log('1= ', uniqueWords('a'));
