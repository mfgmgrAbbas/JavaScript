//  Body of Promise

const promise4 = new Promise(function(resolve, reject){
    //Execution

})
// promise.then used to another promise funtion

promise4.then(function(result){
    // On success
}, function (error) {
    // On error
})

const promise = new Promise(function(resolve, reject){
    resolve("JavaScript!");

})
// promise.then used to another promise funtion

promise.then(function(result){
    console.log(result);
    
}, function (error) {
    console.log(error);
    
})

/* Ouput
JavaScript!
*/

const promise1 = new Promise(function(resolve, reject){
    reject("Bad JavaScript!");

})
// promise.then used to another promise funtion

promise1.then(function(result){
    console.log("success: ", result);
    
}, function (error) {
    console.log("error: ", error);
    
})

/* Ouput
error:  Bad JavaScript!
*/

const promise2 = new Promise(function(resolve, reject){
    reject("Bad JavaScript!");

})
// promise.then used to another promise funtion

promise2.catch(function (error) {
    console.log("error");
}) 

/* Ouput
error
*/

const promise3 = new Promise (function(resolve, reject) {
    reject ("Bad JavaScript!");
})

promise3.then(function(success) {
    console.log("success: ", success);
}).catch (function(error) {
    console.log("error: ", error);
})

/* Ouput
error:  Bad JavaScript!
*/