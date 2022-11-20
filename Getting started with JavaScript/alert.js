// alert comment pop will appear that provide a message. 
// alert("Welcome to our organization!");
// getting user input by prompt
// prompt("Hi!, How are you?");

// Random numbers
Math.random();
console.log(Math.random());

/* Output
0.035616024946935276
*/

/*This number will be a decimal between 0 and 1. If we want a number
between 0 and 100, we can multiply it by 100 */

console.log(Math.random() *100);

/* Output
45.345702039931865
*/

// Math.floor is use to round off the numbers
console.log(Math.floor(Math.random() *100 ));

/* Output
42
*/

let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);  // These two strings are the same: true
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2); // false when convertinto symbol it is false even it is same These two Symbols are the same: false

let empty = null;
let terribleThingToDo = undefined;
let lastName;
console.log("Same undefined:", lastName === terribleThingToDo); // Same undefined: true
let betterOption = null;
console.log("Same null:", lastName === betterOption); // Same null: false