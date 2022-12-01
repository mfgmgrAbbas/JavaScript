const student = {
    rollNumber: "PAIC62266",
    firstName: "Syed Muhammad",
    middleNmae: "Abbas",
    lastName: "Shah",

}

console.log(student.firstName); // Syed Muhammad
console.log(student.rollNumber); // PAIC62266
console.log(student);
/*
{
  rollNumber: 'PAIC62266',
  firstName: 'Syed Muhammad',
  middleNmae: 'Abbas',
  lastName: 'Shah'
}
*/
const student1 = {
    rollNumber: "PIAIC 72563",
    firstName: "Hamid",
    lastName: 'Khan',
    subject: ["Math", "Phy"],
    address: {
        village: "Uchri",
        city: "Talagung",
        houseNo: "3A",
        country: "Pakistan",
    }
}
console.log("This student1 address:", student1.address);
/* Output
This student1 address: {
  village: 'Uchri',
  city: 'Talagung',
  houseNo: '3A',
  country: 'Pakistan'
}
*/
console.log("These are student1 subjects: ", student1.subject);
/*
These are student1 subjects:  [ 'Math', 'Phy' ]
*/
console.log("This is student1 house no: ", student1.houseNo);
console.log("This is student1 city: ", student1.city);
console.log("This is student1 country: ", student1.country);
console.log("This is student1 village: ", student1.village);


console.log("These are student1 complete details: ", student1);
/*
These are student1 complete details:  {
  rollNumber: 'PIAIC 72563',
  firstName: 'Hamid',
  lastName: 'Khan',
  subject: [ 'Math', 'Phy' ],
  address: {
    village: 'Uchri',
    city: 'Talagung',
    houseNo: '3A',
    country: 'Pakistan'
  }
}
*/
let array = [0, 1, 3, 4, 5, 6];
console.log(typeof array); // object

let dog = {
  breed: "German shfard",
  color: "black",
  weight: "2.4",
  height: "3 ft 4 inch",
  age: 3,
  burglarBiter: true,
}
let dogColor = ["color"];
let dogColor1 = dog.color;
console.log(dogColor, dogColor1);
dog["color"] = "white";
dog.weight = 2.3;
console.log(dog);
dog["age"] = "three";
let variable = "age";
console.log(dog[variable]); // three
variable = "breed";
console.log(dog[variable]); // German shfard
dog[variable] = "dachshund";
console.log(dog["breed"]); // dachshund
let company = {
  name: "Robtic Manufacturing",
  activity: "Robot Manufacturing",
  address: {
    address: "3 main city USA",
    city: "elaska",
    postalCode: 122355,
    number: 5428855,
  },
  yearOfEstablishment: 2007,

}
console.log(company);
/* {
  name: 'Robtic Manufacturing',
  activity: 'Robot Manufacturing',
  address: {
    address: '3 main city USA',
    city: 'elaska',
    postalCode: 122355,
    number: 5428855
  },
  yearOfEstablishment: 2007
}*/
// for update a element in sub objects
company.address.city = "California";
company["address"]["number"] = 4523582;
console.log("Comapny after updating number and city ", company);

/* Comapny after updating number and city  {
  name: 'Robtic Manufacturing',
  activity: 'Robot Manufacturing',
  address: {
    address: '3 main city USA',
    city: 'California',
    postalCode: 122355,
    number: 4523582
  },
  yearOfEstablishment: 2007
}*/


 