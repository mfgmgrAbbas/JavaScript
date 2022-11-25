let company = {
    name: "Robotic Manufacturing",
    activities: [
        "Manufacturing", "CNC Manufacturing", "Automation", "hotel robotics", "air robots"
    ],
    address: {
        streetNo: "347 avenu main road",
        numbers: [ 123455, 245656, 258744, 233578],
        zipcode: 8574662,
        city: "California", 
    },
    yearOfEstablishment: 2007,

}
console.log(company);
/* {
  name: 'Robotic Manufacturing',
  activities: [
    'Manufacturing',
    'CNC Manufacturing',
    'Automation',
    'hotel robotics',
    'air robots'
  ],
  address: {
    streetNo: '347 avenu main road',
    numbers: [ 123455, 245656, 258744, 233578 ],
    zipcode: 8574662,
    city: 'California'
  },
  yearOfEstablishment: 2007
}*/

// updating data
console.log(company["activities"]);
/* [
  'Manufacturing',
  'CNC Manufacturing',
  'Automation',
  'hotel robotics',
  'air robots'
]*/
console.log(company["activities"][3]); // hotel robotics
console.log(company["address"]['numbers'][0]); // 123455
company.address = [{
    street: "145 aveneu 35 road",
    number: 4562555,
    zipcode: 458722,
    block: "c"
}, {
    street: "5742 avenur road",
    number: 87462,
    zipcode: 58746,
    block:"d",
}, {
    street: "3214 avenu raod",
    number: 658224,
    zipcode: 45632,
    block: "e"
}]

console.log("address after update", company["address"]);