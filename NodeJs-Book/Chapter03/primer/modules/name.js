"use strict";
// Listing 3.59: The contents of the name.ts file in the modules folder
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
class Name {
    first;
    second;
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get nameMessage() {
        return `Hello ${this.first} ${this.second}`;
    }
}
exports.Name = Name;
