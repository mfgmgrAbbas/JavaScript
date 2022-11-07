/* Miles-to-kilometers converter
Create a variable that contains a value in miles, convert it to kilometers, and log the value in 
kilometers in the following format:
The distance of 130 kms is equal to 209.2142 miles
For reference, 1 mile equals 1.60934 kilometers. */

let milesToKilometers = 1.60934;
 let miles = prompt("please enter the distane");
 console.log(miles, " miles");

 let kilometers = miles / milesToKilometers;
 console.log(kilometers, " kilometers");

 let sentence = "The distance of "+ ' ' + kilometers + " kms is equal to " + ' ' + miles + " miles";
 console.log(sentence);

 // The distance of  130 kms is equal to  209.2142 miles