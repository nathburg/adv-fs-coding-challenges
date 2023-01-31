const progressDays = (numArr) => {
	let progressCounter = 0;
	for (i = 0; i < numArr.length - 1; ++i) {
		if (numArr[i] < numArr[i + 1]) ++progressCounter;
	}
	return progressCounter;
};

console.log('3 = ', progressDays([10, 11, 12, 9, 10]));
console.log('1 = ', progressDays([6, 5, 4, 3, 2, 9]));
console.log('0 = ', progressDays([9, 9]));
