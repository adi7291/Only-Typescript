function throwError(error: string): never {
  throw new Error(error);
}
throwError("404 Page not found error...");

this function never return any thing and its not finish successfully.

function infinityLoop(): never {
  while (true) {
    console.log("running...");
  }
}
infinityLoop(); // function not returning any thing and never finishes...

function sayHello(msg: string): void {
  console.log(msg);
}
sayHello("Hello World!");
