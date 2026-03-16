// Listing 3.9: The contents of the index.ts file in the primer folder
/* function sum(first: number, second: number) {
  return first + second;
}

let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`); */

// Listing 3.11. Supporting multiple types in the index.ts file in the primer folder

/* function sum(first: number, second: number) {
  if (typeof second == "string") {
    return first + Number.parseInt(second);
  } else {
    return first + second;
  }
}

let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`); */

// Listing 3.12: Using a type union in the index.ts file in the primer folder

/* function sum(first: number, second: number | string) {
  if (typeof second == "string") {
    return first + Number.parseInt(second);
  } else {
    return first + second;
  }
}

let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`); */

// Listing 3.13: Changing the function in the index.ts file in the primer folder

/* function sum(first: number, second: number | string) {
  return first + second;
}

let result = sum(10, "10");

console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`); */

// Listing 3.14: Resolving ambiguity in the index.ts file in the primer folder

/* function sum(first: number, second: number | string) {
  return first + (second as any);
}

let result = sum(10, "10");

console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`); */

// The as keyword tells the TypeScript compiler that its knowledge of the second value is incomplete and that it should treat it as a type that I specify.
// . In this case, I have specified the any type, which has the effect of telling the TypeScript that ambiguity is expected and prevents it from producing an error.

// ** Understanding the basic TypeScript/JavaScript Features

// Defining variables and constants

// Listing 3.15: Defining variables and constants in the index.ts file in the primer folder

// Js variable defining
/* let condition = true;
let person = "Bob";
const age = 40;
 */

// Listing 3.16. Specifying types in the index.ts file in the primer folder

// Ts variable defining
/* let condition: boolean = true;
let person: string = "Bod";
const age: number = 49;
 */

// Listing 3.17: Defining a variable without a value in the index.ts file in the primer folder

/* let condition: boolean = true;
let person: string = "Bob";
const age: number = 40;

let place;
console.log("Place value: " + place + " Type: " + typeof place);

place = "London";
console.log("Place value: " + place + " Type: " + typeof place); */

// Listing 3.18: Assigning null in the index.ts file in the primer folder

/* let condition: boolean = true;
let person: string = "Bob";
const age: number = 49;

let place;

console.log("Place value: " + place + " Type: " + typeof place);
place = "London";
console.log("Place value: " + place + " Type: " + typeof place);
place = null;
console.log("Place value: " + place + " Type: " + typeof place);
 */

// Listing 3.19: Using a type union in the index.ts file in the primer folder

/* let condition: boolean = true;
let person: string = "Bob";
const age: number = 49;

let place: string | undefined | null;

console.log("Place value: " + place + " Type: " + typeof place);

place = "London";

console.log("Place value: " + place + " Type: " + typeof place);

place = null;

console.log("Place value: " + place + " Type: " + typeof place);
 */

// Listing 3.20: Defining boolean values in the index.ts file in the primer folder

// let firstBool = true
// let secondBool = false

// After this string data

// Listing 3.22: Using a template string in the index.ts file in the primer folder

// let place: string | undefined | null;
// console.log(`Place value: ${place}, Type: ${typeof place}`);

// Listing 3.25: Using the if/else and switch conditional statements in the index.ts file in the primer folder

/* let firstName = "Adam";

if (firstName == "Adam") {
  console.log("FirstName is Jacqui");
} else {
  console.log("FirstName is neither Adam or Jacqui");
}

switch (firstName) {
  case "Adam":
    console.log("FirstName is Adam");
    break;
  case "Jacqui":
    console.log("FirstName is Jacqui");
    break;
  default:
    console.log("firstName is neither Adam or Jacqui");
    break;
}
 */

// Listing 3.26: Using the equality operator in the index.ts file in the primer folder

/* let firstVal: any = 5;
let secondVal: any = "5";

if (firstVal == secondVal) {
  console.log("They are the same");
} else {
  console.log("They are Not the same");
} */

// Listing 3.28: Removing the type annotations in the index.ts file in the primer folder

/* let firstVal = 5;
let secondVal = "5";

if (firstVal == secondVal) {
  console.log("They are the same");
} else {
  console.log("They are Not the same");
}
 */

// Listing 3.29: Using the null coalescing operator in the index.ts file in the primer folder

/* let val1: string | undefined;
let val2: string | undefined = "London";

let coalesced1 = val1 || "FallBack Value";
let coalesced2 = val2 || "FallBack Value";

console.log(`Result 1: ${coalesced1} `);
console.log(`Result 2: ${coalesced2}`); */

// Listing 3.30: An unexpected null coalescing result in the index.ts file in the primer folder
/* 
let val1: string | undefined;
let val2: string | undefined = "London";
let val3: number | undefined = 0;

let coalesced1 = val1 || "FallBack Value";
let coalesced2 = val2 || "FallBack Value";
let coalesced3 = val3 || 100;

console.log(`Result 1: ${coalesced1} `);
console.log(`Result 2: ${coalesced2}`);
console.log(`Result 3: ${coalesced3}`); */

/* let val1: string | undefined;
let val2: string | undefined = "London";
let val3: number | undefined = 0;

let coalesced1 = val1 ?? "FallBack Value";
let coalesced2 = val2 ?? "FallBack Value";
let coalesced3 = val3 ?? 100;

console.log(`Result 1: ${coalesced1} `);
console.log(`Result 2: ${coalesced2}`);
console.log(`Result 3: ${coalesced3}`);
 */

// Listing 3.33: Using the optional chaining operator in the index.ts file in the primer folder

/* let count : number | undefined | null = 100

if (count != null && count != undefined){
  let result1: string = count.toFixed(2)
  console.log(`Result 1: ${result1}`)
}

let result2: string | undefined = count?.toFixed(2)
console.log(`Result 2: ${result2}`) */

// Listing 3.34: Defining a function in the index.ts file in the primer folder

/* function writeValue(val: string | null) {
  console.log(`Value: ${val ?? "FallBack value"}`);
}

writeValue("London");
writeValue("null"); */

// Listing 3.35: Defining an optional parameter in the index.ts file in the primer folder
/* 
function writeValue(val?:string){
  console.log(`Value: ${val ?? "FallBack Value"}`)
}


writeValue("London") */

// Listing 3.36: Defining a default parameter value in the index.ts file in the primer folder

/* function writeValue(val: string = "default Value") {
  console.log(`Value: ${val}`);
}

writeValue("London");
writeValue();
 */

// Listing 3.37: Using a rest parameter in the index.ts file in the primer folder

/* function writeValue(val: string, ...extractIno: string[]) {
  console.log(`Value: ${val}, Extras: ${extractIno}`);
}

writeValue("London", "Raining", "Cold");
writeValue("Paris", "Sunny");
writeValue("New work"); */

// Listing 3.38: Returning a result in the index.ts file in the primer folder

/* function composeString(val: string): string {
  return `compose string: ${val}`;
}

function writeValue(val?: string) {
  console.log(composeString(val ?? "FallBack value"));
}

writeValue("London");
writeValue(); */

// Listing 3.39: Using a function as an argument to another function in the index.ts file in the primer folder

/* function getUKCapital(): string {
  return "London";
}

function writeCity(f: () => string) {
  console.log(`city: ${f()}`);
}

writeCity(getUKCapital); */

/* let myArray: (number | string | boolean)[] = [];

myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

console.log(myArray[0]); */

// Listing 3.51: Describing an object type in the index.ts file in the primer folder

/* let hat = {
  name: "Hat",
  price: 100,
};

let boots = {
  name: "Boots",
  price: 100,
  category: "Snow Gear",
};

function printDetails(product: {
  name: string;
  price: number;
  category: string;
}) {
  console.log(
    `Name: ${product.name}, Price: ${product.price}, category: ${product.category}`,
  );
}

printDetails(hat);
printDetails(boots); */

// Listing 3.53 Defining an optional property in the index.ts file in the primer folder
/* 
let hat = {
  name: "Hat",
  price: 100,
};

let boots = {
  name: "Boots",
  price: 100,
  category: "Snow Gear",
};

function printDetails(product: {
  name: string;
  price: number;
  category?: string;
}) {
  if (product.category != undefined) {
    console.log(
      `Name: ${product.name}, Price: ${product.price}, category: ${product.category}`,
    );
  } else {
    console.log(`Name: ${product.name}, Price: ${product.price},`);
  }
}

printDetails(hat);
printDetails(boots); */

// Listing 3.54: Defining a class in the index.ts file in the primer folder
// Listing 3.55: Defining a method in the index.ts file in the primer folder

/* class Product {
  constructor(name: string, price: number, category?: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  name: string;
  price: number;
  category?: string;

  printDetails() {
    if (this.category != undefined) {
      console.log(
        `Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`,
      );
    } else {
      console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
  }
}

let hat = new Product("Hat", 100);

let boots = new Product("Boots", 100, "Snow Gear");

/* function printDetails(product: {
  name: string;
  price: number;
  category?: string;
}) {
  if (product.category != undefined) {
    console.log(
      `Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`,
    );
  } else {
    console.log(`Name: ${product.name}, Price: ${product.price}`);
  }
} */

/* printDetails(hat);
printDetails(boots); */

/*hat.printDetails();
boots.printDetails(); */

// Listing 3.56: Simplifying the class in the index.ts file in the primer folder

/* class Product {
  constructor(
    public name: string,
    public price: number,
    public category?: string,
  ) {
    // this.name = name;
    // this.price = price;
    // this.category = category;
  }

  // name: string;
  // price: number;
  // category?: string;

  printDetails() {
    if (this.category != undefined) {
      console.log(
        `Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`,
      );
    } else {
      console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
  }
}

let hat = new Product("Hat", 100);

let boots = new Product("Boots", 100, "Snow Gear");

hat.printDetails();
boots.printDetails();
 */

// Listing 3.57: Using class inheritance in the index.ts file in the primer folder

/* class Product {
  constructor(
    public name: string,
    public price: number,
    public category?: string,
  ) {
    // this.name = name;
    // this.price = price;
    // this.category = category;
  }

  // name: string;
  // price: number;
  // category?: string;

  printDetails() {
    if (this.category != undefined) {
      console.log(
        `Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`,
      );
    } else {
      console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
  }
}

class DiscountProduct extends Product {
  constructor(
    name: string,
    price: number,
    private discount: number,
  ) {
    super(name, price - discount);
  }
}

let hat = new DiscountProduct("Hat", 100, 10);

let boots = new Product("Boots", 100, "Snow Gear");

hat.printDetails();
boots.printDetails(); */

// Listing 3.58: Checking an object type in the index.ts file in the primer folder

/* class Product {
  constructor(
    public name: string,
    public price: number,
    public category?: string,
  ) {}

  printDetails() {
    if (this.category != undefined) {
      console.log(
        `Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`,
      );
    } else {
      console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
  }
}

class DiscountProduct extends Product {
  constructor(
    name: string,
    price: number,
    private discount: number,
  ) {
    super(name, price - discount);
  }
}

let hat = new DiscountProduct("Hat", 100, 10);

let boots = new Product("Boots", 100, "Snow Gear");

console.log(`Hat is a Product? ${hat instanceof Product}`);
console.log(`Hat is a DiscountProduct? ${hat instanceof DiscountProduct}`);
console.log(`Boots is a Product? ${boots instanceof Product}`);
console.log(`Boots i sa DiscountProduct? ${boots instanceof DiscountProduct}`);
 */

// Listing 3.61: Importing specific types in the index.ts file in the primer folder

import { Name } from "./modules/name";
import { WeatherLocation } from "./modules/weather";

let name = new Name("Adam", "Freeman");
let loc = new WeatherLocation("raining", "London");

console.log(name.nameMessage);
console.log(loc.weatherMessage);
