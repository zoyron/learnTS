const message = "Hello, typescript!";

console.log(message);

console.log({ message });

let isLoggedIn: boolean = true;
let isEnabled: boolean = true;

let numbers: number[] = [1, 2, 3];
let names: string[] = ["Sagar", "Shubham", "Srishti"];

function logMessages(message: string): void {
  console.log(message);
}

logMessages("lolwa");

let age: number = 30;
let price: number = 19.99;
console.log(age);
console.log(price);

let personName: string = "Sagar";
let address: string = "240 Raja Garden";

console.log(personName);
console.log(address);

let emptyValue: null = null;
let notAssigned: undefined = undefined;

console.log(emptyValue);
console.log(notAssigned);

/**
 * there are 2 ways to declare and array in tyepscript
 * 1. let/const varName: TypeName [] = value...;
 * 2. let/const varName: Array<TypeName> = value...;
 *
 * of the above two, 2nd method is used to declare other data structes apart from arrays as well
 * let/const varName: DataStructureName<TypeName> = value...;
 */

// union type array
const mixedArray: (string | number)[] = ["Sagar", 27, "Arora", "Coder"];

console.log(mixedArray);
