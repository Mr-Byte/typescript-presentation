//Generic
function print_value<T>(value: T) {
	console.log(value);
}

//Generic constrained by interface
interface HasLength {
	length: number;
}

function print_length<T extends HasLength>(value: T) {
	console.log(length);
}

print_length([1, 2, 3, 4]);
print_length("Hello");

//Structural typed generic
function print_length_structural<T extends { length: number }>(value: T) {
	console.log(length);
}

print_length_structural([1, 2, 3, 4]);
print_length_structural("Hello");

//Generic class
class Maybe<T> {
	_value: T;
	
	constructor(value: T = null) {
		this._value = value;
	}
	
	get has_some(): boolean {
		return this._value != null;
	}
	
	get value(): T {
		if(this.has_some) {
			return this._value;
		}
		
		throw "No value stored.";
	}
}