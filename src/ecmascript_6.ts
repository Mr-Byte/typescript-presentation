//Destructuring
function get_obj(): { a: number, b: number } {
	return { a: 5, b: 10 };
}

let { a, b } = get_obj();
console.log(a, b);

//Destructuring arrays and spread operator
let [x, y, ...rest] = [0, 1, 2, 3, 4, 5];
console.log(x, y, rest);

//Use spread operator to make new array
let newArr = [...rest, x, y];
console.log(newArr);

//Spread in function signature
function print_values(...values: number[]) {
	//For..of loops
	for(let value of values) {
		console.log(value);
	}
}

print_values(1, 2, 3, 4, 5);

//String interpolation
console.log(`${x+y} ${a+b}`);