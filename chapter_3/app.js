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

// Recursion
// Function takes in a number as an argument
function isEven(number) {
  // if the number is less than zero the number is converted to a positive integer
  if (number < 0) {
    return isEven(-number);
    // return false if number === 1
  } else if (number === 1) {
    return false;
    // return true if number ===0
  } else if (number === 0) {
    return true;
    // subtracts two from the given number and continues the recursive function until an out come is satisfied
  } else {
    return isEven(number - 2);
  }
}

// console.log(isEven(50)); // true
// console.log(isEven(75)); // false
// console.log(isEven(-1)); // false

function countBs(str) {
  let counter = 0;
  let chars = str.split('');
  for (const letter of chars) {
    if (letter === 'B') {
      counter += 1;
    }
  }
  return counter;
}

function countChars(str, target) {
  let counter = 0;
  let chars = str.split('');
  for (const letter of chars) {
    if (letter === target) {
      counter += 1;
    }
  }
  return counter;
}

// console.log(
//   countChars(
//     'I am a string and I want to know the amount of times the letter IIIIIII is used',
//     'I'
//   )
// );

let journal = [];
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}
addEntry(['work', 'touched tree', 'pizz', 'running', 'television'], false);
addEntry(
  [
    'work',
    'ice cream',
    'cauliflower',
    'lasagna',
    'touched tree',
    'brushed teeth',
  ],
  false
);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

// console.log(journal);

// Array methods

let todoList = [];
// Will push a task onto the end of an array
function remember(task) {
  todoList.push(task);
}

// Will shift a value of the beginning of an array
function getTask() {
  return todoList.shift();
}

// Will unshift an array onto the beginning of an array
function rememberUrgent(task) {
  todoList.unshift(task);
}

/***
 *
 *  indexOf AND lastIndexOf
 */
let arr1 = [1, 2, 3, 4, 5, 5, 3, 6];

// returns the first occurrence of a value
// console.log(arr1.indexOf(2));

// returns
// console.log(arr1.lastIndexOf(3));

/***
 * SLICE
 */
// First argument is inclusive second is exclusive
// console.log(arr1.slice(0, 3));

function remove(array, index) {
  // function to remove one number by slicing it and then concatenating the remaining string by slicing one more than the index and then joining it with the array concat method
  return array.slice(0, index).concat(array.slice(index + 1));
}

// console.log(remove(arr1, 5));

/***
 * STRING AND THEIR PROPERTIES
 */

//String will not accept new properties. JavaScript wont complain but the values will not be saved.
let kim = 'Kim';
kim.age = 88;
// console.log(kim.age); undefined

// Slice and indexOf act similar to the array methods of the same name but indexOf can take more than one value such as indexOf('abc')
// console.log('Jared'.slice(0, 3));
// console.log('Jared'.indexOf('Jar'));

// Trim will remove white spaces newlines tabs etc
// console.log('  Jared \n is \n the \n best.   \n'.trim());

// Padstart accepts a width and a character to pad with
// console.log(String(6).padStart(3, '0'));
// console.log('Jared'.padStart(10, '_'));

/***
 *
 * Splitting and joining strings
 */

str1 = 'This is Sparta';

strList = str1;
let newStr = [];
for (const char of strList.split('')) {
  newStr.push(char);
  newStr.join(',');
}

// console.log(newStr);

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
}

let numbersArr = [
  1,
  2,
  3,
  4,
  4,
  4,
  4,
  5,
  65,
  76,
  8,
  8,
  235,
  46,
  2345,
  3456,
  4536,
  4356,
];

// console.log(max(1, 2, 3, 4, 5, 6, 7));
// console.log(...numbersArr);

let newNumbersArr = [123, 2345, 5647, 8976, 5234, 425, 5467, 45];

let combinedNumbersArrays = [1, 2, 3, ...newNumbersArr, ...numbersArr];
// console.log(combinedNumbersArray);
/***
 * The Math Object
 */
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}
// console.log(randomPointOnCircle(2));

// Math.random()

randomNumber = Math.floor(Math.random() * 10 + 1);

// console.log(randomNumber);

/***
 * Destructuring
 */
// destructuring an object
let { name } = { name: 'Jared', age: 35 };

// destructuring and array
let array1 = [1, 2, 3, 4];
let [jay] = [{ name: 'Jay' }];
// console.log(jay);

// JSON
// JSON.stringify and JSON.parse

let person = {
  name: 'Jay',
  age: 35,
  occupation: 'Software Engineer',
};

let data = JSON.stringify(person);
// console.log(data);

let parsedData = JSON.parse(data);
// console.log(parsedData);

/***
 * Exercises
 */

//  The Sum of A Range
// A way using a for loop
function range1(start, end) {
  ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}
// console.log(range1(1, 5));

// A way with a recursive function that uses deprecated array comprehensions
function range3(start, end) {
  if (start === end) return [start];
  return [start, ...range3(start + 1, end)];
}

let rangeArray = range3(1, 10);
// console.log(rangeArray);

// Reversing and Array
let arrayA = [1, 2, 3, 4, 5];
function reverseArray(arr) {
  let ans = [];
  for (let i = arr.length; i >= 0; i--) {
    ans.push(i);
  }
  return ans;
}

// console.log(reverseArray(arrayA));

let reverseArrayInPlace = function (array) {
  let arrLength = array.length;
  for (i = 0; i < arrLength; i++) {
    array.splice(i, 0, array.pop());
  }
};

reverseArrayInPlace(arrayA);
// console.log(arrayA);

// The smart way.

let newArray = arrayA.slice().reverse();
// console.log(newArray);

// A list
function arrayToList(arr) {
  // set list = null
  let list = null;
  // loop through array starting at the last index in the array. As long as i is greater than or equal to the start of the array iterate backward through the array from the end
  for (let i = arr.length - 1; i >= 0; i--) {
    // for every iteration set list = to an object that has the value of the array value that is iterated and sets the value of rest to list
    list = { value: arr[i], rest: list };
  }
  // Return the list that has all of the values in an object chained together by rest:list
  return list;
}

let list1 = arrayToList(arrayA);
// console.log(list1);
