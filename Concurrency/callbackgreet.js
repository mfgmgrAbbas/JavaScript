// Set interval and timeout.
//  SetTimeout is use to after how much time it will appear
setTimeout(() => {
    console.log("Hello everyone!");
}, 3000);

/* Output will appear after three second
Hello everyone!
*/
const hello = () => console.log("Lets check if this works!");
setInterval(hello, 1000);

/* Output
Lets check if this works!
Lets check if this works!
Lets check if this works!
Lets check if this works!
Lets check if this works!
*/ // ctrl + c to stop a function

//  SeInterval is use to define interval how much time a thing will appear.
setInterval(() => {
    console.log("every thing works fine!");
}, 1000);

/* Output will appear after every one second untill it stop.
every thing works fine!
every thing works fine!
every thing works fine!
every thing works fine!
*/ // ctrl + c to stop a function

function greet (fullName) {

}

function mainFunction (userName, callback) {
    const name = userName.split(" ")
    console.log(name);
}
mainFunction("Abbas Shah", greet);

/* Output
[ 'Abbas', 'Shah' ]
*/

function greet (fullName) {
    console.log(`Hello ${fullName [0]+' '+ fullName[1]}`);

}

function mainFunction (userName, callback) {
    const name = userName.split(" ")
    callback(name);
}
mainFunction("Abbas Shah", greet);

/* Output
Hello Abbas Shah
*/ 