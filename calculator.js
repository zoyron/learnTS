"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
exports.agePrint = agePrint;
function greet(person) {
    return "Hello " + person.name;
}
function agePrint(person) {
    return person.age;
}
/**
 * And that's why we create interfaces and types
 * like in the above 2 functoins we had to set the same thing as the type yet, we have to do it 2 times
 * It could be 10 functions later on, so to take care of situations like this we create types and interfaces, so that we create once and set the types however many times we want
 */
console.log(greet({ name: "Sagar", age: 27 }));
