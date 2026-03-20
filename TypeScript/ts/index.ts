let a1: number = 1;
a1 = 10;

function add1(a: number, b: number): number {
  return a + b; //  type checking
}

const y = add1(1, a1);

console.log(y);

a1 = y;

console.log(a1);
