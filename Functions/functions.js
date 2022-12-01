function name(params) {
    
}

// function for coffe Order
function coffeOrder (){
    console.log("Your coffe is on the way!");

}
coffeOrder();

/* Your coffe is on the way! */

function coffeOrder (){
    return "Your coffe is on the way!";

}
const order1 = coffeOrder();
console.log(order1);
/* Your coffe is on the way! */

function coffeOrder (drink){
    return `Your coffe ${drink} is on the way!`;

}
const order2 = coffeOrder("Latte");
console.log(order2);
/* Your coffe Latte is on the way! */
function coffeOrder (drink){
    return `Your coffe ${drink} is on the way!`;

}
const order3 = coffeOrder("Esprsso");
console.log(order3);
/* Your coffe Esprsso is on the way! */

function myFirst() {
    console.log("Hello");
  }
  
  function mySecond() {
    console.log("Goodbye");
  }
  
  myFirst();
  mySecond();