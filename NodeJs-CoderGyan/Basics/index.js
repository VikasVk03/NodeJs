// common js 
// const Greeting = require("./greeter")

// ESM
// import Greeting from "./greeter.js";

// name import
import { Greeting } from "./greeter.js";
const name = process.argv[2]

const hours = new Date().getHours();



let greeting = Greeting(hours)

console.log(`${greeting}, ${name}`)