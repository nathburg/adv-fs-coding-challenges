function titleCase(sentence) {
	const capitalizedArr = sentence
		.split(' ')
		.map((word) => capitalizeWord(word))
		.join(' ');
	return capitalizedArr;
}

function capitalizeWord(word) {
	return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

console.log(titleCase('alchemy ROCKS goLD'));
