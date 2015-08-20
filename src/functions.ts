//Function declarations
function foo(x: number) {
	console.log(x);
}

//Function types
function bar(fn: (number) => void) {
	fn(42);
}

//Passing functions
bar(foo);
//Lambda functions
bar(x => console.log(x*2));

//Optional parameters
function foo_opt(x: number, y?: number) {
	console.log(x, y);
}

foo_opt(42);
foo_opt(42, 43);

//Default parameters
function foo_default(x: number, y: number = 30) {
	console.log(x, y);
}

foo_default(42);
foo_default(42, 43);

//Function overloads
function overloads(a: number)
function overloads(a: string)
function overloads(a: any) {
	if(typeof a === "number") {
		console.log(`${a} is a number.`);
	}
	else if(typeof a === "string") {
		console.log(`${a} is a string.`);
	}
}

overloads(50);
overloads("Hello, world!");