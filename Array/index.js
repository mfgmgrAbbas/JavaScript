const array = ["Sunday", "Monday", "Tusesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(array[0]);
console.log(array[5]);
console.log(array[1]);
console.log(array[2]);
console.log(array[4]);
console.log(array[3]);
/*
Sunday
Friday   
Monday   
Tusesday 
Thursday 
Wednesday
*/
console.log(array.length);

const array1 = ["Sun", "Monday", "Tusesday", "Wedneday", "Thursday", "Friday", "Satuday"];
console.log(array1);
/* Output
[
  'Sun',
  'Monday',
  'Tusesday',
  'Wedneday',
  'Thursday',
  'Friday',
  'Satuday'
]
*/

array1[0] = "Sunday";
array1[3] = "Wednesday";
array1[6] = "Saturday";
console.log(array1);
/*
[
  'Sunday',
  'Monday',
  'Tusesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
*/
console.log(array1.length);

const naturalNumbers = [];
console.log(naturalNumbers);
/* Output
[]
*/
naturalNumbers.push(1); 
naturalNumbers.push(2);
naturalNumbers.push(2);
naturalNumbers.push(5);
naturalNumbers.push(6);
console.log(naturalNumbers);
/* Output
[ 1, 2, 2, 5, 6 ]
*/
console.log(naturalNumbers.length);
/* Output
5
*/
naturalNumbers.splice(2, 1, 3); // add 3 at index 2, remove 2 at index 2
naturalNumbers.splice(3, 0, 4); // add 3 at index 2, remove nothing
console.log(naturalNumbers);
/* Output
[ 1, 2, 3, 4, 5, 6 ]
*/
console.log(naturalNumbers.length);
/* Output
6
*/
const naturalNumbers1 = ["Monday",7, 8, 9, 10, 11, 18, 19, 20, 21, 12, 13, 14, 15, 16];
console.log(naturalNumbers1);
/* Output
[
   "Monday", 7,  8,  9, 10, 11, 18, 19, 20, 21
  12, 13, 14, 15, 16
]
*/
console.log ("After sort the arrangement is: ", naturalNumbers1.sort()); // it will sort from no 1 series and 2 series and so on
/* Output
After sort the arrangement is:  [
  10, 11, 12,
  13, 14, 15,
  16, 18, 19,
  20, 21, 7,
  8,  9,  'Monday'
]
*/

let ages = [44, 22, 33, 55, 18, 15, 60, 80, 70];
ages.sort();
console.log("After sort ages are: ", ages);
/* Output
After sort ages are:  [
  15, 18, 22, 33, 44,
  55, 60, 70, 80
]
*/
ages.reverse();
console.log("After reverse ages are: ", ages);
/* Output
After reverse ages are:  [
  80, 70, 60, 55, 44,
  33, 22, 18, 15
]
*/
console.log ('After find the element is : ', naturalNumbers1.find(e => e === 50));
/* Output
After find the element is :  undefined
*/
console.log ('After find the element is : ', naturalNumbers1.find(e => e === "Monday")); // it find the element in the array
/* Output
After find the element is :  Monday
*/
console.log(naturalNumbers1.length);
/* Output
15
*/
naturalNumbers1.shift(); // it will delete the fist element in the array.
console.log(naturalNumbers1);
/* Output
[
   7,  8,  9, 10, 11, 18, 19, 20, 21
  12, 13, 14, 15, 16
]
*/
naturalNumbers1.unshift(0); // It will add the element at the start in the array.
console.log(naturalNumbers1);
/* Output
[
   0,  7,  8,  9, 10,
  11, 18, 19, 20, 21, 12, 13, 14, 15,
  16
]
*/
naturalNumbers1.pop(9); // remove the last value in the array.
console.log(naturalNumbers1);
/* Output
[
   0, 7,  8,  9, 10, 11,
  12, 18, 19, 20, 21, 13, 14, 15
]
*/
naturalNumbers1.splice(6, 4); // it will remove 18, 19, 20, 21 from the centre of the array
console.log("Show results after deleting in the centre: ", naturalNumbers1);
/* Output
[
   0, 7,  8,  9, 10, 11,
  12, 18, 19, 20, 21, 13, 14, 15
]
*/
console.log(naturalNumbers1.length);
/* Output
10
*/
const allNaturalNumers = naturalNumbers.concat(naturalNumbers1);
console.log(allNaturalNumers); // it will joins or combine the two arrays.
/* Output
[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 0, 10, 11, 12,
  13, 14, 15
]
*/
