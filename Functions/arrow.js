// (param) => {

// }
// () => statement 

function add (x ,y) {
    return x+y
}
 console.log(add(1, 2));

/* Output
3
*/
let add2 = (x, y) => x + y
console.log(add2(1, 3));

/* Output
4
*/

//  How to create a method within a object

const student = {
    firstName: "Abbas",
    lastName: "Shah",
    fullName: function () {return this.firstName + ' ' + this.lastName}
}
console.log(student.fullName());

/* Output
Abbas Shah
*/