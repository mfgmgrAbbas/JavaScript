//  Variables are create in three form Var, let, const
// Data type

let teacherName2 = "Alexander";
console.log(typeof teacherName2);

/*Output
string
*/

let teacherAge = 20
console.log(typeof teacherAge);

/*Output
number
*/

let nameChange = true;
console.log(typeof nameChange);

/*Output
boolean
*/

let teacherClass;
console.log(typeof teacherClass);

/*Output
undefined
*/

let teacherFavouriteStudent = null;
console.log(typeof teacherFavouriteStudent);

/*Output
object
*/

console.log("Before assigning variable", teacherName);
/*Output
Before assigning variable undefined
*/
var teacherName = "Imran";
var subject = "JavaScript"
console.log("After assigning variable", teacherName);
/*Output
After assigning variable Imran
*/
teacherName = "Alexander";
console.log("After reassigning variable", teacherName);

/* Output
After reassigning variable Alexander
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


testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof(testVariable);
console.log(variableTypeTest1);
console.log(variableTypeTest2);

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);

let nr2 = 2;
console.log(nr2++); // return 2 post increment update after log
console.log(nr2);

let nr3 = 2;
console.log(++nr3); // return 3 pre increment 
console.log(nr3);

let nr4 = 4;
let nr5 = 5;
let nr6 = 2;
console.log(nr4++ + ++nr5 * nr6++);