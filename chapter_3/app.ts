// // Chapter 3 functions
// // FUNCTION DEFINITION
// // A function definition is a regular binding where the value of the binding is a function
// let square = function (x) {
//   return x * x;
// };

// // BINDINGS AND SCOPES
// // When bindings are made inside the body of a function the scope of that variable is only within that block of scope and can only reach out.
// // Lexical Scoping
// // Each nested function can reach out but can never reach in
// // The global scope is the entire program and the bindings are available throughout the program.

// // When a function is a value: const foo = function(){return foobar} then the function can be used elsewhere not just initialized

// // DECLARATION NOTATION
// // A function declaration is hoisted in scope and can be called before it is declared because of JavaScripts two pass compiler
// // console.log('The future says ', future());

// function future() {
//   return "You'll never have flying cars!";
// }

// // Arrow Functions
// // arrow functions are similar to function expressions except when it comes to objects and the this keyword
// square = (x) => {
//   return x * x;
// };

// // console.log(square(8));

// // if a function is given extra variables it will ignore the extra variables and return the value from the needed amount of variables

// // CLOSURES
// // A function has access to any variable within the scope or environment that it was created in

// // Recursion
// // A recursive function calls itself
// function power(base = 2, exponent = 2) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }
// // console.log(power(2, 10));
// // console.log(power());

// //  Another recursive function seeks to find the history to either adding or multiplying by three to reach a certain number :

// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `(${history} * 3)`)
//       );
//     }
//   }
//   return find(1, '1');
// }
// // console.log(findSolution(24));

// // We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.

// // 007 Cows
// // 011 Chickens
// // This asks for a function of two arguments—the number of cows and the number of chickens. Let’s get coding.

// // function printFarmInventory(cows, chickens) {
// //   let cowString = String(cows);
// //   while (cowString.length < 3) {
// //     cowString = '0' + cowString;
// //   }
// //   console.log(`${cowString} Cows`);

// //   let chickenString = String(chickens);
// //   while (chickenString.length < 3) {
// //     chickenString = '0' + chickenString;
// //   }
// //   console.log(`${chickenString} chickens`);
// // }

// // printFarmInventory(22, 400);

// // // A way using a function to pad the number

// // function printZeroPaddedWithLabel(number, label) {
// //   let numberString = String(number);
// //   while (numberString < 3) {
// //     numberString = '0' + numberString;
// //   }
// //   console.log(`${numberString} ${label}`);
// // }

// // function printFarmInventory(cows, chickens, pigs) {
// //   printZeroPaddedWithLabel(cows, 'cows');
// //   printZeroPaddedWithLabel(chickens, 'chickens');
// //   printZeroPaddedWithLabel(pigs, 'pigs');
// // }

// // printFarmInventory(7, 11, 3);

// function zeroPad(number, width) {
//   let string = String(number);
//   while (string.length < width) {
//     string = '0' + string;
//   }
//   return string;
// }

// function printFarmInventory(cows, chickens, pigs) {
//   console.log(`${zeroPad(cows, 3)} Cows`);
//   console.log(`${zeroPad(chickens, 3)} Chickens`);
//   console.log(`${zeroPad(pigs, 3)} Pigs`);
// }

// // printFarmInventory(12, 34, 4);

// // Functions and Side effects

// // functions are called for their return value or the side effect that they produce.
// // A function that returns a value is often more useful than one that produces a side effect as the one that produces a value is often reusable and therefor more useful

// // A pure function returns a value and is not dependant on any other code and does not produce any side effects.

// // summary

// // Define f to hold a function value
// const f = function (a) {
//   console.log(a + 2);
// }

// // Declare g to be a function
// function g(a, b) {
//   return a * b * 3.5;
// }

// // a less verbose function value
// let h = (a) => a % 3;

// /***
//  * Exercises
//  */

// //  Build a function that returns the minimum
// const returnLeast = (a, b) => {
//   if (a > b) {
//     return `${b} is less than ${a}`;
//   } else if (b > a) {
//     return `${a} is less than ${b}`;
//   } else if (a === b) {
//     return `${a} === ${b}`;
//   } else {
//     return 'Please enter numbers only. Not strings';
//   }
// };

// console.log(returnLeast(12, 12));

let message: string = 'Hello world'