//* * Regular function

function add(a: number, b: number): number {
  return a + b;
}

// console.log(add(3, 5));

// ** Function expression

const divide = function (a: number, b: number): number {
  return a / b;
};

// console.log(divide(9, 3));

// ** Arrow function

const multiply = (a: number, b: number): number => {
  return a * b;
};

// console.log(multiply(5, 6));

// ** optional parameters

function greet(userName: string, greeting?: string): string {
  return `${greeting ? greeting : ""} ${userName}`;
}

// console.log(greet("vk"));

// ** default parameters

function greet1(userName: string, greeting: string = "Hi"): string {
  //   return `${greeting} ${userName}`;

  return greeting ? `${greeting} ${userName}` : `${userName}`;
}

// console.log(greet1("vk"));
// console.log(greet1("mj", "Hello"));

// ** function overloading

function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: any): number {
  return value.length;
}

// console.log(getLength("hello"));
// console.log(getLength([1, 2, 3, 4, 5, 6, 7, 8, 90, 0]));

// ** Rest parameters

function sum(...numbers: number[]): number {
  /* return numbers.reduce((total, num) => {
    return total + num;
  }, 0); */
  return numbers.reduce((total, num) => total + num, 0);
}

// console.log(sum(1, 23, 4, 5, 66, 7));

function greet2(greeting: string, ...names: string[]): void {
  names.forEach((names) => {
    console.log(`${greeting}, ${names}`);
  });
}

greet2("Hello", "Vikas", "Developer", "Everyone");
