// import PromptSync from "prompt-sync";
// const prompt = promptSync();
// let userInput = "On a scale of 1-10, how much do you like the name Alaxander";
// userInput = Number(userInput);
// while ()

let i = 0;
while (i <11) {
    console.log(i);
    i++;
}
/* Output
0
1
2
3
4
5
6
7
8
9
10 */
let someArray = ["Asma", "Atia", "Aysha", "Amna", "Khadja", "Hira"];
let notFound = true;
while (notFound && someArray.length > 0) {
    if (someArray[0] === "Aysha") {
        console.log("Found her!");
        notFound = false;
    } else {
        someArray.shift();
    }
    
} 
/* Found her! */

let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];
while (fibonacciArray.length < 25) {
 fibonacciArray.push(nr1);
 temp = nr1 + nr2;
 nr1 = nr2;
 nr2 = temp;
}

import PromptSync from "prompt-sync";
const prompt = PromptSync();
let number;
do {
    number = prompt("please enter a number between: 0-100");

} while (!(number >= 0 && number <= 100));

/* Please enter a number between 0 and 100: 150
Please enter a number between 0 and 100: -50
Please enter a number between 0 and 100: 55

It asks three times, because the first two times the number was not between
0 and 100 and the condition in the while block was true. With 55 , the
condition in the while block became false and the loop ended.
*/

