/* For a shopping store where you can ship products with gifts */

const products = ["Shirts", "Trouser", "Jacket"];
const gifts = ["Pen", "Keychain", "Tie"];
for (let i = 0; i < products.length; i++){
    for (let j = 0; j < gifts.length; j++) {
        console.log(products[i] + ' - ' + gifts[j]);
        
    }
}
/* Output
Shirts - Pen
Shirts - Keychain 
Shirts - Tie      
Trouser - Pen     
Trouser - Keychain
Trouser - Tie     
Jacket - Pen      
Jacket - Keychain 
Jacket - Tie
*/
