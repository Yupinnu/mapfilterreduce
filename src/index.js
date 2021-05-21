// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumber = numbers.map(double);
// console.log(newNumber);

// var newNumber = [];
// function double(x) {
//   newNumber.push(x * 2);
// }
// numbers.forEach(double);

// console.log(newNumber);

// const newNumber = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumber);

// var numbers = [3, 56, 2, 48, 5];
//Filter - Create a new array by keeping the items that return true.

// const newNumber = numbers.filter(function (num) {
//   return num < 10;
// });

// console.log(newNumber);

// var newNumber = [];
// numbers.forEach(function (num) {
//   if (num < 10) {
//     newNumber.push(num);
//   }
// });

// console.log(newNumber);

// var numbers = [3, 56, 2, 48, 5];
//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentnumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentnumber = " + currentnumber);
//   return accumulator + currentnumber;
// });

// console.log(newNumber);

// var newNumber = 0;
// numbers.forEach(function (currentnumber) {
//   newNumber += currentnumber;
// });

// console.log(newNumber);

// var numbers = [3, 56, 2, 48, 5];
//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumber);
//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
