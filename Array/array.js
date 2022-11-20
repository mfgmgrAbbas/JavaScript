arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];
arr3 = new Array(10);
arr4 = [10];
console.log("This value is for arr3: ", arr3);
console.log("This value is for arr4: ", arr4);
console.log("This value is for arr2: ", arr2);
console.log("This value is for arr1: ", arr1);

/* ouput
This value is for arr3:  [ <10 empty items> ]
This value is for arr4:  [ 10 ]
This value is for arr2:  [ 'black', 'orange', 'pink' ]
This value is for arr1:  [ 'purple', 'green', 'yellow' ]
*/
let arr = ["hi there", 5, true];
console.log(typeof arr[0]); // string
console.log(typeof arr[1]); // number
console.log(typeof arr[2]); // boolean

cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[1]); // Renault
console.log(cars[2]); // Volkswagen
console.log(cars[-1]); // undefined
cars[0] = "Tesla"
cars[1] = "Keya"
cars[-1] = "Fiat"
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[-1]);
console.log(cars);
/* Tesla
Keya
Fiat
[ 'Tesla', 'Keya', 'Volkswagen', '-1': 'Fiat' ]*/

colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];
console.log("length of colors: ", colors.length);
console.log("length of booleans: ", booleans.length);
console.log("length of empty array: ", emptyArray.length);
/* Output
length of colors:  3
length of booleans:  4
length of empty array:  0 */
console.log("length of -1: ", colors.length-1); // 2

numbers = [24, 36, 15];
numbers[5] = 45
console.log("It should be numbers array: ", numbers); // It should be numbers array:  [ 24, 36, 15, <2 empty items>, 45 ]
console.log("It should be numbers array length after update: ", numbers.length); // It should be numbers array length after update:  6