console.log(Math);

let pi = console.log(Math.PI);
let piRound = Math.round(Math.PI);
console.log(piRound);
 let a = Math.ceil(2.100)
 let b = Math.ceil(-2.1)
 let c = Math.floor(2.10)
 let e = Math.floor(-2.100)
 console.log(`for a variable a: ${a} for a variable b: ${b} for variable c: ${c} for variable d: ${e}`);
 /* for a variable a: 3 for a variable b: -2 for variable c: 2 for variable e: -3*/
 let d = new Date();
 let year = d.getFullYear();
 console.log(year);
 
 console.log(d); // 2022-11-26T16:53:03.979Z

  let x = Math.floor(Math.random());
  console.log(x);
  let y = Math.floor(Math.random()*10);
  console.log(y);
  let z = Math.floor(Math.random()*100);
  console.log(z);

  let f = parseInt("10"); // convert it to a number 10
  let g = parseInt("10.02"); // convert it to a number 10 did not consider decimal
  let h = parseInt("10.65");// convert it to a number 10 did not consider decimal
  let i = parseInt("hello");// NaN not a number
  console.log(f, g, h, i);

  let j = parseFloat("10"); // convert it to a number 10
  let k = parseFloat("10.02"); // convert it to a number 10.02  consider decimal
  let l = parseFloat("10.65");// convert it to a number 10.65 consider decimal
  let m = parseFloat("hello");// NaN not a number
  console.log(j, k, l, m);

  let n = Number("10"); // 10
  let o = Number("10.33"); // 10.33
  let p = Number(true); // 1
  let q = Number(false); // 0
  let r = Number("hello") // NaN
  console.log(n, o, p, q, r);

  let s = 10.545578;
  let property = s.toFixed(2);
  let t = 10.33785587.toFixed(3);
  console.log(typeof t);
  let u = 10.9545524557.toFixed(1);
  console.log(typeof u);
  let v = 45.45582638
  console.log(v.toFixed(1));
  let w = 3.5745587
  console.log(w.toFixed(10));
  console.log(s, t, u, v, w);
  console.log(typeof property);
let name = new String("Abbas");
console.log(name);
let date = new Date();
console.log(date);
let ooldDate = new Date(2007, 11, 21);
console.log("show old date", ooldDate);

let text = "Please locate where 'locate' occurs!".lastIndexOf("where", 25);
console.log(text);
let text1 = "The rain in SPAIN stays mainly in the plain".match(/ain/gi);
console.log(text1);
const points = [40, 100, 1, 5, 25, 10];
const pointsSorted = points.sort(function(a, b){return a - b});
console.log(pointsSorted);