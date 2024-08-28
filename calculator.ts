export function greet(person: Person): string {
  return "Hello " + person.name;
}

export function agePrint(person: Person): number {
  return person.age;
}

/**
 * And that's why we create interfaces and types
 * like in the above 2 functoins we had to set the same thing as the type yet, we have to do it 2 times
 * It could be 10 functions later on, so to take care of situations like this we create types and interfaces, so that we create once and set the types however many times we want
 */

console.log(greet({ name: "Sagar", age: 27 }));

// in the above code instead of passing an object like that, we can create a type/interface separately and pass that interface to the function instead of injecting the object itself directly

// all interfaces start with a capital letter

// to take care of the redudant code, we created a type here
// simply to say that the person variable is of type Person like x and y could be of type number, we created our own type here and given that type to the variable "person"
interface Person {
  name: string;
  age: 27;
}
