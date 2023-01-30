const countJewels = (jewels, stones) => {
	const jewelsArr = jewels.split('');
	const stonesArr = stones.split('');
	let jewelCounter = 0;
	for (const stone of stonesArr) {
		if (jewelsArr.includes(stone)) ++jewelCounter;
	}
	return jewelCounter;
};

console.log('3 = ', countJewels('aA', 'aAAbbbb'));
console.log('0 = ', countJewels('z', 'ZZ'));
