function oddishOrEvenish(number) {
	const digitSum = number
		.toString()
		.split('')
		.map((number) => +number)
		.reduce((prev, curr) => prev + curr, 0);
	if (digitSum % 2) return 'Oddish';
	else return 'Evenish';
}

console.log('Evenish = ', oddishOrEvenish(121));
console.log('Oddish = ', oddishOrEvenish(41));
