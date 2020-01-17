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

// function min(num1, num2) {
//   return Math.min(num1, num2);
// }
// console.log(min(12, 6));

// // Author Solution
// function min(a, b) {
//   if (a < b) return a;
//   else return b;
// }
// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10

// // Recursion
// // Author Solution
// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → false

// Bean Counting

// Write a funtion that takes a string as an argument and counts the Capital B's in it

// Then write a function that takes a string and counts a certain character in it

// function countBs(str) {
// 	count = 0;
//   for(let i = 0; i < str.length; i++) {
//   	if(str.charAt(i) === 'B') {
//     	count ++
//     }
//   }
//   return count
// }

// function countChar(str, char) {
// 	count = 0;
//   for(let i = 0; i< str.length; i++) {
//   	if(str.charAt(i) === char) {
//     	count ++
//     }
//   }
//   return count
// }

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4

// // Author's solution
// function countChar(string, ch) {
//   let counted = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == ch) {
//       counted += 1;
//     }
//   }
//   return counted;
// }

// function countBs(string) {
//   return countChar(string, "B");
// }
/***(
 *
 *
 * Chapter 4 coding practice
 *
 *
 *
 * ) */

/****
 *
 *
 *
 *
 *
 * SUM OF RANGE CHAPTER 4
 */
// function range(start, end) {
//   let arr = [];
//   for (let i = start; i <= end; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// // console.log(range(1, 10));

// function sumOfRange(start, end) {
//   let sum = 0;
//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumOfRange(1, 10));

// function incrementByStep(start, end, step) {
//   let arr = [];
//   if (step > 0) {
//     for (let i = start; i <= end; i += step) {
//       arr.push(i);
//     }
//   } else {
//     for (let i = start; i >= end; i += step) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(incrementByStep(0, 100, 5));

// let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumOfArray(arr) {
//   let total = 0;
//   for (let value of arr) {
//     total += value;
//   }
//   return total;
// }
// console.log(sumOfArray(arrayOne));

// book version
// function range(start, end, step = start < end ? 1 : -1) {
//   let array = [];
//   if (step > 0) {
//     for (let i = start; i <= end; i += step) array.push(i);
//   } else {
//     for (let i = start; i >= end; i += step) array.push(i);
//   }
//   return array;
// }

// console.log(range(1, 10, 2));

/*****
 *
 *
 *
 *
 * REVERSING AND ARRAY
//  */
// let arrayValue = [1, 2, 3, 4, 5];
// function reverseArray(arr) {
//   let output = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     output.push(arr[i]);
//   }
//   return output;
// }
// // console.log(reverseArray(arrayValue));

// // Start at the beginning of the array and iterate to the half way point
// //  With each loop we set the element at i — or arr[i] — equal to a variable called old
// // Then we set the first element equal to the last, and the last element equal to the first
// // With each subsequent loop, as we moved inward we did the same thing
// function ReverseArrayInPlace(arr) {
//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     let old = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = old;
//   }
//   return arr;
// }
// ReverseArrayInPlace(arrayValue);
// console.log(arrayValue);

/***
 *
 *
 * A list
 *
 * Chapter 4
//  */

// // List data structure
// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

// // Function that takes in an array and creates a list
// function arrayToList(array) {
//   let list = null;
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = { value: array[i], rest: list };
//   }
//   return list;
// }

// // function that takes a list and turns it into an array
// function listToArray(list) {
//   let array = [];
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// }

// // Function that prepends an item into a list and creates a new list
// function prepend(value, list) {
//   return { value, rest: list };
// }

// function nth(list, n) {
//   if (!list) return undefined;
//   else if (n == 0) return list.value;
//   else return nth(list.rest, n - 1);
// }

// nth using recursion
// let nth = function(list, number) {
//   if (list.rest != null && number != 0) {
//     number--;
//     return nth(list.rest, number);
//   }
//   return list.value;
// };
// console.log(nth(list, 2));

/****
 *
 * DEEP
 * EQUAL
 * CHAPTER 4
 *
 *
 */

// function deepEqual(a, b) {
//   if (a === b) return true;

//   if (a == null || typeof a != "object" || b == null || typeof b != "object")
//     return false;

//   // Set keysA and KeysB to the Object.keys of each object
//   let keysA = Object.keys(a),
//     keysB = Object.keys(b);

//   // If the lengths of the keys are not the same they are not equal
//   if (keysA.length != keysB.length) return false;

//   for (let key of keysA) {
//     // this is where the bkey is compared to the a key that is iterated in the for loop
//     if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//   }
//   return true;
// }

/***
 * 
 //Chapter 5
 * 
 * 
 * 
 */

// Flattening
// let arrays = [[1, 2, 3], [4, 5], [6]];

// // function concatArrays(array) {
// //   let newArray = [];
// //   array.reduce(arr => {
// //     console.log(arr);
// //     newArray.concat(arr);
// //   });
// //   return newArray;
// // }

// // Books version
// function concatArrays(array) {
//   return array.reduce((flat, current) => flat.concat(current), []);
// }
// console.log(concatArrays(arrays));
/***
 *
 *
 *
 * YOUR OWN LOOP
 */
// function loop(start, test, update, body) {
//   for (let value = start; test(value); value = update(value)) {
//     body(value);
//   }
// }

// loop(
//   3,
//   n => n > 0,
//   n => n - 1,
//   console.log
// );

/***
 *
 *
 * EVERYTHING
 */
// solution from the book
// function every(array, predicate) {
//   for (let element of array) {
//     if (!predicate(element)) return false;
//   }
//   return true;
// }

// function every2(array, predicate) {
//   return !array.some(element => !predicate(element));
// }
// console.log(every2([1, 3, 5], n => n < 10));
// // → true
// console.log(every2([2, 4, 16], n => n < 10));
// // → false
// console.log(every2([], n => n < 10));
// // → true

/***
 *
 *
 * Dominant writing direction
//  */
// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex(c => c.name == name);
//     if (known == -1) {
//       counts.push({ name, count: 1 });
//     } else {
//       counts[known].count++;
//     }
//   }
// }

// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (
//       script.ranges.some(([fom, to]) => {
//         return code >= from && code < to;
//       })
//     ) {
//       return script;
//     }
//   }
//   return null;
// }

// function dominantDirection(text) {
//   let counted = countBy((text, char) => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.direction : "none";
//   }).filter(({ name }) => name != "none");

//   if (counted.lenght == 0) return " ltr";
//   return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
// }

// console.log(dominantDirection("Hello!"));
// // → ltr
// console.log(dominantDirection("Hey, مساء الخير"));
// // → rtl
