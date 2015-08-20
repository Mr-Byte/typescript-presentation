import { Greeter } from "./module_a";
import a from "./module_a";
// import * from "./module_a";
// import * as a from "./module_a";

let greeter = new Greeter();

for(let name of a.names) {
	greeter.greet(name);
}