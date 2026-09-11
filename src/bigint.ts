console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); //9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 1); //9007199254740992

// How to create Bigint number
let bigNum1 = 123n;
console.log(typeof bigNum1);
let bigNum2 = BigInt(100n);
console.log(typeof bigNum2);

console.log(bigNum1 + bigNum2);
