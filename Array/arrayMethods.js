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