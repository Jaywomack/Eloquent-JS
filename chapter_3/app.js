// Chapter 3 functions
// FUNCTION DEFINITION
// A function definition is a regular binding where the value of the binding is a function
let square = function (x) {
  return x * x;
};

// BINDINGS AND SCOPES
// When bindings are made inside the body of a function the scope of that variable is only within that block of scope and can only reach out.
// Lexical Scoping
// Each nested function can reach out but can never reach in
// The global scope is the entire program and the bindings are available throughout the program.

// When a function is a value: const foo = function(){return foobar} then the function can be used elsewhere not just initialized

// DECLARATION NOTATION
// A function declaration is hoisted in scope and can be called before it is declared because of JavaScripts two pass compiler
console.log('The future says ', future());

function future() {
  return "You'll never have flying cars!";
}

// Arrow Functions
// arrow functions are similar to function expressions except when it comes to objects and the this keyword
square = (x) => {
  return x * x;
};

console.log(square(8));
