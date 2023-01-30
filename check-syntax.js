const Stack = require('./stack');

function checkSyntax(code) {
	const codeArr = code.split('');
	const parenStack = new Stack();
	const curlyStack = new Stack();
	for (const char of codeArr) {
		switch (char) {
			case '(':
				parenStack.push('(');
				break;
			case ')':
				const endParen = parenStack.pop();
				if (typeof endParen === 'undefined') return false;
				break;
			case '{':
				curlyStack.push('{');
				break;
			case '}':
				const endCurly = curlyStack.pop();
				if (typeof endCurly === 'undefined') return false;
				break;
		}
	}
	return parenStack.peek() === 'empty' && curlyStack.peek() === 'empty';
}

console.log('true = ', checkSyntax('if(true) { return; }'));
console.log('false = ', checkSyntax('if(true( { return; }'));
console.log('false = ', checkSyntax('if(true) { return;'));
console.log('false = ', checkSyntax('(if(true) { return; }'));
console.log('true = ', checkSyntax('( true && { name: "foo" } )'));
console.log('false = ', checkSyntax('( true && { name: "foo" ) )'));
console.log('false = ', checkSyntax('( true && ( name: "foo" } )'));
console.log('true = ', checkSyntax('((2 + 3) * (4 + 11 * (2 - 1)))'));
console.log('false = ', checkSyntax('((2 + 3) * (4 + 11 * 2 - 1)))'));
console.log('false = ', checkSyntax('((2 + 3) * (4 + 11 * (2 - 1))'));
