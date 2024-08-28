interface PersonInterface {
  name: string;
  age: number;
  greet(): string;
}

class Person implements PersonInterface {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(): string {
    return "Hello, this returns a string";
  }
}

/**
 * The above is a very shallow example of writing interface and classes implementing them
 * Let's make another a little more elaborate example
 */

interface Shapes {
  name: string;
  perimeter: number;
  area: number;
}

// the above interface means that any class that implements this interface MUST have the above properties, they can have extra as well, but the ones in this interface are a MUST

class Circle implements Shapes {
  name: string;
  radius: number;
  perimeter: number;
  area: number;
  constructor(name: string, radius: number) {
    this.name = name;
    this.radius = radius;
    this.area = Math.PI * radius * radius;
    this.perimeter = 2 * Math.PI * this.radius;
  }
  calcArea() {
    return this.area;
  }
}

/**
 * Other thing similar to interfaces is types
 * but types cannot be implemented by classes or other interfaces
 * and unlike interfaces, types needs to be equated, i.e, you have to use an equal sign to assign values to types
 */

type Person1 = {
  name: string;
  age: number;
};

// a good usecase of using types is unions and ors. let's learn

interface Circle {
  radius: number;
}

interface Square {
  side: number;
}

interface Rectangle {
  width: number;
  height: number;
}

// so if we were to write a function that calculates area and one function that calculates the perimeter of the passed shape type and for some reason we've have to pass all the shapes(interface), then one way is as follows
// function area(shape: Circle | Square | Rectangle) {
//   // calculate area
// }

// function perimeter(shape: Circle | Square | Rectangle) {
//   // calculate area
// }

/**
 * Let's say there are 10 more functions for 10 such operations
 * and as the time passed, you created 10 more shapes
 * passing so many types in so many functions would be a real hassle
 * So, one usecase of types is to creates "ands" and "ors"
 */

// the other way of passing types to the function arguments is to create "ands" or "ors" using types

type Shape = Circle | Square | Rectangle;

// the following way you create an "and" using types
// type Shape = Circle & Square & Rectangle;

function area(shape: Shape) {}

function perimeter(shape: Shape) {}

// using the above way of types, you can even add more shapes to the type Shape later on
