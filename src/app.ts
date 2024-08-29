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

/**
 * The method discussed above for using array doesnt require any particular order for entering the data in the array
 * But the following method requires strict adherence to the specified order and type or you will get an error if the order and type are different
 */
const person1: [string, number, boolean] = ["Sagar", 27, true];

console.log(person1);
// using the above method [12, "asd", false] would be an invalid array

// functions
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

// arrow functions
const greet = (naam: string): void => {
  console.log("hello " + naam);
};

/**
 * if we add a "?" with an argument of the function then it becomes optional, and if a values if not passed, it assumes undefined instead of giving errors like in the case of no "?"
 * function add(a:number, b:number, c?:number)
 * in the above case the argument "c" is optional and if nothing is passed to "c" the the value "undefined is used"
 *
 * function add(a:numberm, b: number, c: number)
 * in the above case all the arguments are necessary
 *
 *
 * we can also set a default value incase no argument is passed
 * function add(a:number = 10, b:number)
 * if the value of a is not passed, the function will use the value 10 since it is the default one
 *
 * if we dont want to specify the number of arguments explicitely then we can use the following method to pass any number of arguments as an array and unpack it later on like shown in the function
 * function add(...items:number[])
 */

interface personInterface1 {
  name: string;
  age: number;
}

/**
 * array objects
 */
const scores: number[] = [80, 90, 100];
const subjects: string[] = ["maths", "english", "hindi"];
console.log(scores);
console.log(subjects);

// creating an array of a complex data structure
interface Book {
  title: string;
  author: string;
  pages: number;
}

/**
 * arrayName: number[] this means that every element of the array is a number
 * so arrayName: complexDataType[] means that every element of the array is a complex data type
 */

const library: Book[] = [
  { title: "Learn typescript", author: "Sagar", pages: 10 },
  { title: "Learn DataStructures", author: "Sagar Arora", pages: 1000 },
];

console.log(library);
