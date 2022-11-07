let n = 5;
console.log(n == 5); // only compare the value. Outout will be 'true'
console.log(n === 5);// compare the value and datatype. Outout will be 'true'
console.log(n = 5);// 5
console.log(n != 5);// false not equal to
console.log(n > 8);// false greater than
console.log(n < 9);// true less than
console.log(n >= 8);// false greaterthan equal to
console.log(n <= 11);// true lessthan equal to

let a = 2 + 2 == "4" //  true
console.log("From here second example ", a);
let b = 2 + 2 === "4" //  false
console.log(b);
let c = 2 + 2 > 4  //  false
console.log(c);
let d = 2 + 2 >=  4  //  true
console.log(d);
let e = 2 + 3 !==  5  //  false
console.log(e);
let f = 2 + '3' !== 5 // true
console.log(f);

// Logic Operators
let x = 6
let y = 10
let a1 = x < y && x === 6 // true
console.log("From here logic operator will stat ", a1);
let a2 = x < y && x !== 6  // false
console.log(a2);
let a3 = x === y || y === 10 // true
console.log(a3);
let a4 = (x===6 && y===4) || x < y  // true beacuse it solve braket first
console.log(a4);



