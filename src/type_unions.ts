//Type union with type guards
function handle_string_or_number(value: string | number) {
	if(typeof value === "string") {
		console.log(`${value} is a string.`);
	}
	else if(typeof value === "number") {
		console.log(`${value} is a number.`);
	}
}

handle_string_or_number("Foo");
handle_string_or_number(42);

//Declare a type union type.
type NumberArray = number[] | Float32Array | Float64Array;

//Use a common operation of the type union.
function sum_numbers(numbers: NumberArray): number {
	let result = 0;
	
	for(let index = 0; index < numbers.length; ++index) {
		result += numbers[index];
	}
	
	return result;
}

let numbers = [0, 1, 2, 3, 4, 5];
let float32numbers = new Float32Array(numbers);
let float64numbers = new Float64Array(numbers);

console.log(sum_numbers(numbers));
console.log(sum_numbers(float32numbers));
console.log(sum_numbers(float64numbers));