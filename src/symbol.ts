console.log(Symbol("id") == Symbol("id"));
//symbol without description...
// let id1 = Symbol();
// let id2 = Symbol();
//symbol with description....
const id1 = Symbol("id");
const id2 = Symbol("id");
let user = {
  [id1]: 1,
  [id2]: 2,
};
const user1 = {
  name: "Ramessh lal",
  age: "31",
};
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
//to get the symbols key we need to use Object.getOwnPropertySymbol().
const symbols = Object.getOwnPropertySymbols(user);
console.log("symbolsId", symbols);
// to get the value related to symbols
console.log(user[id1]);
console.log(user[id2]);
console.log(Object.keys(user1));

//symbol in typescript
let token: symbol = Symbol("token");
console.log(token);
