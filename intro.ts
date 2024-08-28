let greetings: string = "hello sagar";
console.log(greetings);

let myNum: number = 27;

// the "any" keyword is a problem in function and returning values

function addTwo(num: number) {
  return num + 2;
}

// in the case of functions we must specify the types to reap full benefits of typescript
function upper(s: string) {
  return s.toUpperCase();
}

function userSignUp(name: string, email: string, isPaid: boolean) {}

// passing default values to arguments in functions
function userLogIn(
  name: string = "",
  email: string = "",
  isPaid: boolean = false
) {}
// you can just assign default values to arguments like that only. first you annotate the type, then you assign the default value

console.log(upper("sagar"));

/**
 * A better way to write typescript functions
 */

// add annotation while returning the value
function addTwo1(num: number): number {
  // the "number" written before the curly braces is the return type of this function
  return num + 2;
}

const getHello = (s: string): string => {
  return "hello";
};

// it's good practise to mention the return type as "void" if your function is not returning anything
function printErrMsg(errMsg: string): void {
  // we wrote void here because we're not returning anything
  console.log(errMsg);
}

// some functions never return a value, in that case there return type should be "never"
// this is very useful in case of HANDLING ERRORS
function handleErr(errMsg: string): never {
  throw new Error(errMsg);
}

/**
 * Objects in typescript
 */

// the most common usecase of object while developing something is to get passed to functions or get returned from functions
const User = {
  name: "Sagar",
  email: "sgrarora@mail.com",
  isPaid: false,
};

function createUser({ name: string, isPaid: boolean }) {
  // passing an object as an argument in this function
}

// if you want the function to return an object, then annotate the function with an object
function createCourse({}): {} {
  // the pair of curly braces before the function definition curly brace means that we will be returning an object
  return {};
}

// you can even make the returning objects very specific as well
function createCourse1({ name: string, isPaid: boolean }): {
  name: string;
  isPaid: boolean;
} {
  return { name: "DSA", isPaid: true };
}

/**
 * Intro to type alias in typescript
 */

type Point = {
  x: number;
  y: number;
};

function printCoord(point: Point) {
  console.log("The x coordinate is " + point.x);
  console.log("The y coordinate is " + point.y);
}

printCoord({ x: 100, y: 200 });
