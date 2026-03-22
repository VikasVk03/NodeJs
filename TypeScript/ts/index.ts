/* let a1: number = 1;
a1 = 10;

function add1(a: number, b: number): number {
  return a + b; //  type checking
}

const y = add1(1, a1);

console.log(y);

a1 = y;

console.log(a1);
 */

// ** Basic Types in TS

// * Numbers
/* let num: number = 123_456_789; // i can put underscore for my understanding and in out: number without underscore: 123456789
let num1: bigint = 12345566353425367n;
console.log("num: ", num);
console.log("num1: ", num1);
 */

// * String

let characters: string = "Code with Technyks";

// * Boolean
//both works in similar way
const isAvailable = true;
let isNotAvailable: boolean = false;

// * Array

// let variableName: typeName[] = [v1,v2,v3....]
// let numArray: number[] = [1, 2, 3, 4];
// let charArray: string[] = ["a", "b"];
// array which alternatively takes number and string
// let valArray: [number, string] = [1, "a"];

// * undefined
let val: undefined = undefined;

// * null
let val1: null = null;

// if type null and undefined used then its value will only respected type. and can not be interchangeably assign value null and undefined

// * Object
// general
let obj: object = {
  name: "Abc",
  age: 10,
};

obj = { ...obj, phone: 123456789 };

// console.log(obj);

let obj1 = { ...obj };

// let ObjectName: {key: type} = { key: value}; then it will only accept key and type value defined and any other key:value will throw error and will not accept
let obj2: { name: string; age: number } = {
  name: "Vk",
  age: 55,
};
// console.log(obj2);
// will change the value
obj = { ...obj2, name: "Vikas", age: 44 };

// console.log(obj);

// ** Any - assign any type to variable

let numVal: any;
numVal = 1;
numVal = "a";

// Function

function testAnyTest(val: any) {
  console.log(val);
}

// Arrays

// let numArray: number[] = [1, 2, 3, 4];
// let charArray: string[] = ["a", "b"];

// property - no trailing parentheses
// charArray.forEach(val => val.length)

// method - trailing parentheses
// charArray.forEach(val => val.includes("a", 0))

// ** Tuples

/* 
In JavaScript, arrays consist of values of the same type, but sometimes we need to store a collection of values of different types in a single variable. 

TypeScript offers tuples for this purpose. Tuples are similar to structures in C programming and can be passed as parameters in function calls.

a tuple that holds values of specific types in a fixed order.

*/

let arr: [number, string] = [1, "Alice"];

let coordinates3D: [number, number, number] = [10, 20, 30]; // (x, y, z) axis

// localhost:4200?name=Techyks&phone=1234556778
// extract and save numerous type data in array

let userData: [string, number] = ["Technyks", 1234556778];

let response: [number, string] = [200, "success"]; // http-response

// drawback of tuple in ts
response.push(0);
// console.log(response);

// ** Enums - define set of named constants, makes code readable and maintainable

/* 
An enum (enumeration) in TypeScript is a special "class" that provides a way to define a set of named constants, making the code more readable and maintainable

enum variableName {
  constant1, constant2, constant3
}

*/

// number key 0 to 1
/* enum Color {
  Red,
  Green,
  Blue,
} */
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

// console.log(Color);

let colorVar: Color = Color.Blue;

// console.log(colorVar);

// simple use of enum
/* const Small = 1;
const Medium = 2;
const Large = 3;

let size = Medium */

/* enum Size {
  Small = 1,
  Medium,
  Larger,
} */

const enum Size {
  Small = 1,
  Medium,
  Larger,
}

let size: Size = Size.Medium;
// console.log("Size ", size);

// ** unknown type

let notSure: unknown = "a";

if (typeof notSure === "number") {
  // now intellisense will show only number related methods, here as compare with number

  notSure.toFixed(2);
} else if (typeof notSure === "string") {
  // now string methods

  notSure.charAt(2);
}

// never type - use where no value is returned or it will throw error,

function infiniteLoop(): never {
  while (true) {
    // do something endlessly
    console.log(1);
  }
}

// infiniteLoop();

//  never type:  used many times in IoT devices

// using in function that will throw error

function throwError(message: string): never {
  throw new Error(message);
}
// throwError("Something went wrong");

// ** void type :  used to indicate that a function does not return a value. It is a type that represents the absence of any type

// used in function that performs logics but not returns any thing
function logMessage(message: string): void {
  console.log(message);
  return undefined; // allowed in void
}

// logMessage("Good Morning");

// ** type inference & type assertions

/* 
  * Type inference is TypeScript's ability to automatically deduce the type of a variable, function return, or expression based on its assigned value and context, without requiring explicit type annotations. 
  
  * Type assertion is when a developer explicitly overrides TypeScript's inferred type, telling the compiler they know the value's type better in a specific scenario

*/

// type inference
let userName = "Vikas"; // typescript infers the type as string

// type assertion
let someValue: any = "Hello world";
let strLength: number = (someValue as string).length;

// ** union types : allows a variable to be one of several different types, providing flexibility while maintaining type safety. It is defined using the vertical bar (|) symbol to separate each possible typ

let id: string | number; // id can either be string or a number
id = "abc";
id = 101;

/* function printId(id: string | number) {
  console.log(`id: ${id}`);
}
printId("abc");
printId(101); */

// ** type narrowing

function processValue(value: string | number) {
  if (typeof value === "string") {
    // Here, 'value' is narrowed to string
    console.log(value.toUpperCase());
  } else {
    // Here, 'value' is narrowed to number
    console.log(value.toFixed(2));
  }
}

// processValue(12);
// processValue("vk");
