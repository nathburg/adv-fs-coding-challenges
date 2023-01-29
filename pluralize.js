const pluralize = (words) => {
	const length = words.length;
	const pluralized = [];
	for (let i = 0; i < length; i++) {
		const word = words.pop();
		const index = pluralized.indexOf(word);
		if (index > -1) {
			pluralized.splice(index, 1);
			pluralized.push(word + 's');
		} else if (!pluralized.includes(word + 's')) pluralized.push(word);
	}
	return pluralized;
};

console.log('["cows", "pig"]= ', pluralize(['cow', 'pig', 'cow', 'cow']));
console.log('["tables"]= ', pluralize(['table', 'table', 'table']));
console.log(
	'["chair", "pencil", "arm"]= ',
	pluralize(['chair', 'pencil', 'arm'])
);
