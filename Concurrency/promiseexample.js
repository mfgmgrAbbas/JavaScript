/* In this exercise, you will create a counter that will output the values in
sequence using Promises.
1. Set up a Promise that resolves with a value of Start Counting .
2. Create a function named counter() that has one argument that gets
the value and outputs it into the console.
3. Set up the next function in the Promise with four then() instances,
which should output a value into the counter function, and return a
value which will provide input for the subsequent then() instance.
The returned values should be one , then two , then three . */

const promise = new Promise ((resolve, reject) => resolve("Start counting"));
const counter = (value) => console.log(value);
// promise.then(value => counter(value));
/* OutPut
Start counting
 */
promise.then (value => {
    counter (value);
    return "One";
}).then (value => {
    counter (value);
    return "Two";
}).then (value => {
    counter(value);
    return "Three";
}).then (value =>{
    counter (value);
})
/* OutPut
Start counting
One
Two
Three
 */

// if we reject the Promise then catch the error using catch...
const promise1 = new Promise ((resolve, reject) => reject("Somthing went wrong!"));
const counter1 = (value) => console.log(value);
promise1.then (value => {
    counter1 (value);
    return "One";
}).then (value => {
    counter1 (value);
    return "Two";
}).then (value => {
    counter1(value);
    return "Three";
}).then (value =>{
    counter1 (value);
}).catch((error) => console.error(error));
/* OutPut
Somthing went wrong!
 */