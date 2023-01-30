class Stack {
	#array = [];

	constructor(initialArray) {
		if (Array.isArray(initialArray)) this.#array = initialArray;
	}

	push(item) {
		this.#array.push(item);
	}

	pop() {
		return this.#array.pop();
	}

	peek() {
		return this.#array[this.#array.length - 1];
	}
}

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log('lizard = ', stack.pop()); // 'lizard'
console.log('goose = ', stack.peek()); // 'goose'
console.log('goose = ', stack.pop()); // 'goose'
stack.push('llama');
console.log('llama = ', stack.pop()); // 'llama'
console.log('fox = ', stack.peek()); // 'fox'
console.log('fox = ', stack.pop()); // 'fox'
console.log('undefined = ', stack.pop()); // null
