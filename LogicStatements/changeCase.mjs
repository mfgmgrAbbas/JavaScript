import PromptSync from "prompt-sync";
const prompt = PromptSync();
var month = prompt("Enter a month");
var charsInMonth = month.length;
if (charsInMonth >= 3) {
    var monthAbbrev = month.slice(0, 3);
}
console.log(monthAbbrev);

let cityToCheck = "pakistan"

var firstChar = cityToCheck.slice(0, 1); //p
console.log(firstChar);
var otherChars = cityToCheck.slice(1); // akistan  slice method join the word from start index and if second option is not given then to the end
console.log(otherChars);
firstChar = firstChar.toUpperCase();  // P
console.log(firstChar);
otherChars = otherChars.toLowerCase(); // akistan
console.log(otherChars);
var cappedCity = firstChar + otherChars; // Pakistan
console.log(cappedCity);
let txt = "I can eat bananas all day";
let x = txt.slice(10, 17) // to get bananas
console.log(x);
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

//  👇️ Hello World
console.log(getTitleCase('hello world'));

var text = "To be or not to be."; 
var segIndex = text.indexOf("be");
console.log(segIndex);
console.log(text.lastIndexOf("be"));

let mrBlue = "Mr Blue has a blue house and a blue car";
let result = mrBlue.replace("blue", "red");  // it will replace one blue with red. it is case senstive
console.log(result); // Mr Blue has a red house and a blue car
let result1 = mrBlue.replace(/blue/g, "red");  //regex  it will replace all the blue expect case sentive
console.log(result1); // Mr Blue has a red house and a red car
let result2 = mrBlue.replace(/blue/gi, "red"); // insentive it will replace all the blue
console.log(result2); // Mr red has a red house and a red car