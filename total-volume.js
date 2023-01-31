function totalVolume(...boxes) {
	const argsArr = new Array(arguments.length);
	for (i = 0; i < argsArr.length; ++i) {
		argsArr[i] = arguments[i];
	}
	const volSum = argsArr.reduce(
		(acc, curr) => acc + curr[0] * curr[1] * curr[2],
		0
	);
	return volSum;
}

console.log('63 = ', totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log('10 = ', totalVolume([2, 2, 2], [2, 1, 1]));
console.log('1 = ', totalVolume([1, 1, 1]));
