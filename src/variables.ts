let implicit = "Hello, world!";
let aNumber: number = 42;
let aString: string = "Hello, world!";
let anArray: number[] = [1, 2, 3, 4];
let aTuple: [number, string] = [42, "Hello, world!"];
let aDate: Date = new Date(Date.now());
let anything: any = { "foo": 42, "bar": "Hello, world!" };
// let doesntWork: number = aNumber + aString;

console.log(implicit);
console.log(aNumber);
console.log(aString);
console.log(anArray);
console.log(aTuple);
console.log(aDate);
console.log(anything);


//Constant
const foo = 42;