/* First install 
npm init
npm install prompt-sync
npm install random-int
*/


import promptSync from "prompt-sync";
import randomInteger from "random-int";
import randomInterger from "random-int";

// The availble choices

let choices = ["rock", "paper", "scissor"];

// There will be the message that are shown to the user
let userPrompt = "Please enter 0 for rock, 1 for paper, 2 for scissor";
let outcome = "ready to play!";

// Computer chose randomly
let computerChoice = randomInteger(0, 2);
let computerChoiceName = choices[computerChoice];
// prompt the user for input

const prompt = promptSync();
const userInput = prompt(userPrompt);
let userChoice = choices[userInput];
if (computerChoiceName === userChoice){
    outcome = "draw";
}else if (computerChoiceName === "rock" && userChoice === "paper" ){
    outcome = "Player Wins";
}else if (computerChoiceName === "rock" && userChoice === "scissor"){
    outcome = "Computer Wins"
}else if (computerChoiceName === "paper" && userChoice === "rock"){
    outcome = "Computer Wins";
}else if (computerChoiceName === "paper" && userChoice === "scissor"){
    outcome = "Palyer Winds";
}else if (computerChoiceName === "scissor" && userChoice === "rock"){
    outcome = "Palyer Winds";
}else if (computerChoiceName === "scissor" && userChoice === "paper"){
    outcome = "Computer Wins";
}else {
    outcome = "Invalid entry. Please try again.";
}
console.log("Computer Chooses " + computerChoiceName);
console.log("User Chooses " + userChoice);
console.log(outcome);



