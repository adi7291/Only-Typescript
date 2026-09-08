//integer

let num1: number = 100;

console.log(typeof num1, num1);

let num2: number = -100;
console.log(num2);

//float
let num3: number = 100.001;
console.log(num3);

//Nan
let num4: number = NaN;
console.log(typeof num4, num4);

const result: number = num1 / 0;
console.log(result, typeof result);

const result1: number = num1 / Infinity;
console.log(result1);
