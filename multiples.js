function multiplesOfN(n) {
	const multiplesArr = [];
	for (i = n; i <= 50; i += n) multiplesArr.push(i);
	return multiplesArr;
}

console.log('[5, 10, 15, 20, 25, 30, 35, 40, 45, 50] = ', multiplesOfN(5));
console.log('[25, 50 = ', multiplesOfN(25));
console.log('[] = ', multiplesOfN(75));
