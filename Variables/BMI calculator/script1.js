/* BMI calculator
Set values for height in inches and weight in pounds, then convert the
values to centimeters and kilos, outputting the results to the console:
1 inch is equal to 2.54 cm
2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight
(in kilos) divided by squared height (in meters). Output the results to the
console.
*/
let inchTocm = 2.54;
console.log(inchTocm, " cm");
let kiloTopounds = 2;
console.log(kiloTopounds, " pounds");
let weight = prompt("Please enter your weight in kilo. ");
console.log(weight, " kilo");
let height = prompt ("Please enter your height in cm.");
console.log(height, " meters");
let BMI = weight / (height**2);
console.log("Your BMI is ", BMI);