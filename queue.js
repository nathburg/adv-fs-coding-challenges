class Queue {
	#queue = [];

	constructor(initialQueue) {
		if (Array.isArray(initialQueue)) this.#queue = initialQueue;
	}

	enqueue(item) {
		this.#queue.push(item);
	}

	dequeue() {
		return this.#queue.shift();
	}

	hasNext() {
		return typeof this.#queue[0] !== 'undefined';
	}
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log('fox = ', queue.dequeue()); // 'fox'
console.log('true = ', queue.hasNext()); // true
console.log('goose = ', queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log('lizard = ', queue.dequeue()); // 'lizard'
console.log('true = ', queue.hasNext()); // true
console.log('llama = ', queue.dequeue()); // 'llama'
console.log('false = ', queue.hasNext()); // false
console.log('undefined = ', queue.dequeue()); // null
