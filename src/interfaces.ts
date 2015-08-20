//Structurally typed
interface IPerson {
	name: string;
	age: number;
	children?: IPerson[] //Optional member.
}

function print_person(person: IPerson) {
	console.log(`${person.name} is ${person.age} years old.`)
}

print_person({ name: "Josh", age: 30 });

//Optional members
function print_person_and_children(person: IPerson) {
	print_person(person);
	
	if(person.children) {
		for(let child of person.children) {
			print_person_and_children(child);
		}
	}
}

let aDude: IPerson = {
	name: "Robert",
	age: 42,
	children: [
		{ name: "Jimmy",
		  age: 16
		}
	]
}

print_person_and_children(aDude);

//Function interfaces
interface BinaryNumberFunc {
	(lhs: number, rhs: number): number;
}

function print_result(fn: BinaryNumberFunc) {
	console.log(fn(42, 42));
}

print_result((x, y) => x + y);

//Array interfaces
interface StringMap {
	[name: string]: string;
}

let x: StringMap = { "X": "Hello", "Y": "World"};
console.log(x["X"], x["Y"]);


//Hybrid interfaces
//Useful for working with existing JavaScript types, where the type may be a function, array, and object all in one.
interface Hybrid {
	(): Hybrid;
	[index: number]: string;
	length: number;
}