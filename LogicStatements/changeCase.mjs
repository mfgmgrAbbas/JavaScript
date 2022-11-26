import PromptSync from "prompt-sync";
const prompt = PromptSync();
// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth >= 3) {
//     var monthAbbrev = month.slice(0, 2);
// }
// console.log(monthAbbrev);

// let cityToCheck = "pakistan"

// var firstChar = cityToCheck.slice(0, 1); //p
// console.log(firstChar);
// var otherChars = cityToCheck.slice(1); // akistan  slice method join the word from start index and if second option is not given then to the end
// console.log(otherChars);
// firstChar = firstChar.toUpperCase();  // P
// console.log(firstChar);
// otherChars = otherChars.toLowerCase(); // akistan
// console.log(otherChars);
// var cappedCity = firstChar + otherChars; // Pakistan
// console.log(cappedCity);

 let firstName = "abbas shah";
 firstName.toUpperCase();
 firstName.toLowerCase();
 console.log(firstName[0].toUpperCase() + firstName.slice(1, 5) + " " + firstName[6].toUpperCase() + firstName.slice(7));
 console.log(firstName[6]);
console.log(firstName.length);
let emptyString = "";
console.log(emptyString.length);


function getTitleCase(str) {
  const titleCase = str
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  return titleCase;
}

// 👇️ Hello World
console.log(getTitleCase('hello world'));