const { myErrorWrapper } = require("oh-my-error");

function test(arg) {
  console.log(arg);
  return arg;
}

const [data, error] = myErrorWrapper(test)("Hello World!");
if (error) console.log("Oh no! It's an error");
console.log(data, error);

// Try 2:
// const Func123 = (arg) => myErrorWrapper(arg);
// const [data, error] = Func123("Hello World!");

// console.log(data, error);
