let array1 = [1, 5, 7, 8, 9, "Friday"];
let array2 = ["Jan", "Feb", "Mar", "Apr"];
let array3 = [array1, array2, 365, true];
console.log(array3);
/* Output
[
  [ 1, 5, 7, 8, 9, 'Friday' ],   
  [ 'Jan', 'Feb', 'Mar', 'Apr' ],
  365,
  true
]
*/
console.log(array1[3], array2[0], array3[1][3]);
/* Output
8 Jan Apr 
*/
console.log(array1[2], array2[1], array3[0][5]);
/* Output
7 Feb Friday
*/