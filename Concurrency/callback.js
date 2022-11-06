
// passing a function as an argument to another function.

function doflexiableStuff (excuteStuff) {
    excuteStuff();
    console.log("DoflexiableStuff");
}

const function1 = () => console.log("Hello from function 1");
const function2 = () => console.log("Hello from function 2");

doflexiableStuff(function1); 
doflexiableStuff(function2); 

/* Output
Hello from function 1
DoflexiableStuff     
Hello from function 2
DoflexiableStuff  
*/

function doflexiableStuff (callback) {
    callback();  
}

const function3 = () => console.log("Hello from function 3");
const function4 = () => console.log("Hello from function 4");

doflexiableStuff(function3); 
doflexiableStuff(function4); 

/* Output
Hello from function 3 
Hello from function 4  
*/
