favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("mango");
console.log(favoriteFruits); // [ 'grapefruit', 'orange', 'lemon', 'mango' ] push add element at last of array
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits); // [ 'grapefruit', 'orange', 'lemon', 'mango', 'lime' ] 
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(1, 0, "hexagone") // add element at index 1 and zero del
console.log(arrOfShapes); // [ 'circle', 'hexagone', 'triangle', 'rectangle', 'pentagon' ]
arrOfShapes.splice(2, 2, "octogone", "heptagone");
console.log(arrOfShapes); // [ 'circle', 'hexagone', 'octogone', 'heptagone', 'pentagon' ]
arrOfShapes.splice(2, 12, "octogone", "heptagone" ); // value greater than array length did not effect the result because it stop at array length.
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7); // [ 1, 2, 3, 4, 5, 6 ]
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
arr8.pop();
console.log("delete last value", arr8); //  [ 1, 2, 3, 4, 5, 6, 7, 8]
arr8.shift();
console.log("delete first value", arr8); //  [ 2, 3, 4, 5, 6, 7, 8]
arr8.splice(1, 3);
console.log("delete after index 1 and onward 3 values", arr8); // [ 2, 6, 7, 8 ]
delete arr8[0]; 
console.log("delete 0 index but show empty on index 0", arr8); // delete 0 index but show empty on index 0 [ <1 empty item>, 6, 7, 8 ]
arr8.splice(0, 1, 2);
console.log(arr8); // [ 2, 6, 7, 8 ]
let findValue = arr8.find(function(e){
    return e === 6;
})
let findValue2 = arr8.find((e) => {
    return e === 10;
})
console.log(findValue, findValue2); // 6 undefined
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log("It will show index of a element", findIndex, findIndex2); // 1, -1 for 10 it will give -1 index
let findIndex3 = arr8.indexOf(6, 2)
console.log(findIndex3); // -1 because it did not find index of 6 at 2 index
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log("it will show index of last element ", lastDog); // it will show index of last element  4
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names); // [ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]
let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log(ages); // [ 18, 33, 40, 56, 72 ]
names.reverse();
console.log(names); // [ 'Maria', 'James', 'Fatiha', 'Bert', 'Alicia' ]
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arraysOfArrays = [someValues1, someValues2, someValues3];
console.log(arraysOfArrays); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
let element1 = arraysOfArrays[2][0];
let element2 = arraysOfArrays[1][1];
let element3 = arraysOfArrays[0][2];
console.log(element1, element2, element3); // 7 5 3
arrOfArraysOfArrays = [arraysOfArrays, arraysOfArrays, arraysOfArrays];
console.log(arrOfArraysOfArrays); 
/* [
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
]*/
let middleValue = arrOfArraysOfArrays[1][1][1];
console.log(middleValue); // 5 
/* The first step is to get the second array of arrays, so index 1. Then we need
to get the second array of this one, which again is index 1. Now we reach
the level of the values, and we need the second value, so again we use index
1. This is useful in many situations, for example, when you want to work
with matrices. */
