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