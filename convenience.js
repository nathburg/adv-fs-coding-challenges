const changeEnough = (coinsArr, amount) => {
	const coinValueArr = [25, 10, 5, 1];
	let changeTotal = 0;
	for (i = 0; i < 4; ++i) {
		changeTotal += coinValueArr[i] * coinsArr[i];
	}
	console.log(changeTotal);
	return changeTotal >= amount * 100;
};

console.log('false = ', changeEnough([2, 100, 0, 0], 14.11));
console.log('true = ', changeEnough([0, 0, 20, 5], 0.75));
console.log('true = ', changeEnough([30, 40, 20, 5], 12.55));
console.log('false = ', changeEnough([10, 0, 0, 50], 3.85));
console.log('false = ', changeEnough([1, 0, 5, 219], 19.99));
