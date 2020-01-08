/****
 *  Chapter 2 Looping a triangle

 */

// for (let i = 0; i < 8; i++) {
//   let hash = "#";
//   function repeat(str, num) {
//     return str.repeat(i);
//   }

//   console.log(repeat(hash, i));
// }

// solution from author

// for (let line = "#"; line.length < 8; line += "#") console.log(line);

/****
 * Chapter 2 FizzBuzz
 */

// FizzBuzz
// Print all numbers from 0-100
// Numbers divisible by 3 print 'Fizz'
// Numbers divisible by 5 print 'Buzz'
// Numbers divisible by both 3 and 5 print 'FizzBuzz'

// for (let num = 0; num <= 100; num++) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (num % 5 === 0) {
//     console.log("Buzz");
//   } else if (num % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(num);
//   }
// }
// //Author Solution to FizzBuzz
// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }

/****
 * Chapter 2 Chessboard
 */

//Write a program that represents an 8x8 grid, using new-line characters to seperate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboard.
// let size = 8;
// let hash = "#";
// for (let i = 0; i < size; i++) {
//   if (size % 2 === 0) {
//     console.log(`${hash.repeat(size)} `);
//     continue;
//   } else if (size % 2 === odd) {
//     console.log(` ${hash.repeat(size)}`);
//     continue;
//   }
// }    // Solution does not work

// Author's solution
// let boardSize = 8;
// let size = `${boardSize + boardSize}`;
// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "/n";
// }
// console.log(board);
// When you have a program that generates theis pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

/******
 *
 * CHAPTER 3
 *
 *
 *
 *
 *
 *
 */

// Minimum
// Write a function min that takes two arguments and returns their minimum.

function min(num1, num2) {
  return Math.min(num1, num2);
}
console.log(min(12, 6));

// Author Solution
function min(a, b) {
  if (a < b) return a;
  else return b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
