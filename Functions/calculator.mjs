const value1 = 10;
const value2 = 3;
let operator = "-";

// one to one mapping a = value1, b= value2 and c= operator.
function calculator(a, b, c) {

    if (c === "-"){
        console.log(a - b);
    }else {
        console.log(a + b);
    }
    
}
calculator(value1, value2, operator); // Output 7

const value3 = 10;
const value4 = 3;
let operator1 = "";

// one to one mapping a = value1, b= value2 and c= operator.
function calculator1(d, e, f) {

    if (f === "-"){
        console.log(d - e);
    }else {
        console.log(d + e);
    }
    
}
calculator1(value3, value4, operator1);
// Output = 13

const value5 = 10;
const value6 = 3;
let operator2 = "+";

// one to one mapping a = value1, b= value2 and c= operator.
function calculator2(g, h, i) {

    if (i === "-"){
        return (g - h);
    }else {
        return (g + h);
    }
    
}
calculator2(value5, value6, operator2);
// Output = 13

const array = [];
for (let i = 0; i< 10; i++) {
    let value7 = i * 5;
    let value8 = i * i;
    let result = calculator2(value7, value8, "+");
    array.push(result);
    
}
console.log(array);
/* [
    0,  6, 14,  24,  36,
    50, 66, 84, 104, 126
  ]
  */