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
