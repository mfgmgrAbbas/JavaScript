/* User Input in JavaScript
Create Project Directory:
mkdir myUserInputProgram
Now create package.json and node.js project:
npm init
Install prompt-syc Library:
npm install prompt-sync
*/
import PromptSync from "prompt-sync";
const prompt = PromptSync();
var name = prompt("What is your name?");
console.log(name);
/* Output
What is your name?Abbas Shah
Abbas Shah
*/

const num = prompt("Please enter a number: ");
console.log("Your number + 4 = ");
/* Ouput
Your number + 4 = 
*/
console.log(Number(num) + 4);
/*
Your number + 4 = 
9
*/