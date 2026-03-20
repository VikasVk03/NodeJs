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
let numArray: number[] = [1, 2, 3, 4];
let charArray: string[] = ["a", "b"];
// array which alternatively takes number and string
let valArray: [number, string] = [1, "a"];

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

console.log(obj);

let obj1 = { ...obj };

// let ObjectName: {key: type} = { key: value}; then it will only accept key and type value defined and any other key:value will throw error and will not accept
let obj2: { name: string; age: number } = {
  name: "Vk",
  age: 55,
};
console.log(obj2);
// will change the value
obj = { ...obj2, name: "Vikas", age: 44 };

console.log(obj);
