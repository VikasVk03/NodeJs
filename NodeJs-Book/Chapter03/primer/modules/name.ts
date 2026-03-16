// Listing 3.59: The contents of the name.ts file in the modules folder

export class Name {
  constructor(
    public first: string,
    public second: string,
  ) {}

  get nameMessage() {
    return `Hello ${this.first} ${this.second}`;
  }
}
