import PromptSync from "prompt-sync";
const prompt = PromptSync();

// let isInPakistan = prompt("Are you in Pakistan?");
// const greeting = isInPakistan === "true" ? "Hello Imran" : "Hello Alexander"
// console.log(greeting);
/* OutPut
Are you in Pakistan?true
Hello Imran
Are you in Pakistan?false
Hello Alexander
*/

// Switch case
let name1 = prompt("What is your name?");
let location = prompt("Where are you?");
switch(location) {
    case "Pakistan":
        console.log("Assalam o Alaikum", name1);  //Where are you?Pakistan Assalam o Alaikum Arsal
        break;
    case "India":
        console.log("Namaste", name1); // Where are you?India Namaste Koli
        break;
    case "Japan":
        console.log("Konnichiwa", name1); // Where are you?Japan Hello! Ali
        break;
    case "USA":
        console.log("Hi!", name1);// Where are you?USA Hi! Abbas
        break;
    case "Germany":
        console.log("Hallo!", name1); // Where are you?Germany Hallo! Arsal
        break;
    case "France":
        console.log("Bonjour", name1); // Where are you?France Bonjour Arsal
        break;
    default:
        console.log("Hello!", name1); // any other country will return Hello!
}

let name = prompt('Please enter your name');
let country = prompt("Please enter your country");
if (country=="Pakistan") {
    console.log("Assalam o Alaikum! ", name);
} else if (country =="USA") {
    console.log("Hello! ", name);
} else {
    console.log("Please enter a counrty Pakistan or USA.");
}
/* Output if user enter USA then greet
Please enter your name Arsal Ali
Please enter your countryUSA
Hello!   Arsal Ali */
/* Output if user enter Pakistan then greet
Please enter your name Arsal Ali
Please enter your countryPakistan
Assalam o Alaikum!   Arsal Ali */
/* Output if user enter other than mentioned countries
Please enter your name Arsal Ali
Please enter your countryIndia
Please enter a counrty Pakistan or USA.
*/

let percentage = prompt("please enter your percentage here");
if (percentage >= 90) {
    console.log("You get; A*");
}else if(percentage >= 80) {
    console.log("You got; A");
}else if(percentage >= 70) {
    console.log("You got; B");
}else if(percentage >= 60) {
    console.log("You got; C");
}else if(percentage >= 50) {
    console.log("You got; D");
}else if (percentage >= 40){
    console.log("You got; E");
}else {
    console.log("You got; U");
}

// ternory operator

let percentage1 = prompt("What is your percentage?");
const result = percentage1 >= 40 ? 'Passed' : 'Failed';
console.log(result);
