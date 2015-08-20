class Person {
	private _name: string;
	private _age: number;
	
	constructor(name: string, age: number) {
		this._name = name;
		this._age = age;
	}
	
	get name(): string {
		return this._name;
	}
	
	get age(): number {
		return this._age;
	}
	
	toString(): string {
		return `Name: ${this._name}, Age: ${this._age}`;
	}
}

let person = new Person("Josh Rodgers", 30);
console.log(person.name);
console.log(person.age);
console.log(person);

//Inheritance
class Employee extends Person {
	private _id: number;
	
	constructor(name: string, age: number, id: number) {
		super(name, age);
		this._id = id;
	}
	
	get id(): number {
		return this._id;
	}
}
