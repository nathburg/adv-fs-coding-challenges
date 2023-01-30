function at(arr, index) {
	if (index < 0) return arr[arr.length + index];
	else return arr[index];
}

console.log('b = ', at(['a', 'b', 'c', 'd', 'e'], 1));
console.log('d = ', at(['a', 'b', 'c', 'd', 'e'], -2));
