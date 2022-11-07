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