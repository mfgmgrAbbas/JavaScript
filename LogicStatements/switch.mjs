import PromptSync from "prompt-sync";
const prompt = PromptSync();
let activity = prompt("please slect activity to perform. Get Up, Breakfast, Drive to work, Lunch, Drive home, Dinner: ").toLowerCase();

if (activity === "get up") {
  console.log("It is 6:30AM");
} else if (activity === "breakfast") {
  console.log("It is 7:00AM");
} else if (activity === "drive to work") {
  console.log("It is 8:00AM");
} else if (activity === "lunch") {
  console.log("It is 12.00PM");
} else if (activity === "drive home") {
  console.log("It is 5:00PM");
} else if (activity === "dinner") {
  console.log("It is 6:30PM");
}else{
  console.log("I cannot determine the current time.");
}

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }
switch (activity) {
  case "get up":
    console.log("its 6 am");
    break;
  case "breakfast":
    console.log("It is 7:00AM");
    break;
  case "drive to work":
    console.log("It is 8:00AM");
    break;
  case "lunch":
    console.log("It is 12.00PM");
    break;
  case "drive home":
    console.log("It is 5:00PM");
    break;
  case "dinner":
    console.log("It is 6:30PM");
    break;
  default:
    console.log("I cannot determine the current time.");
}