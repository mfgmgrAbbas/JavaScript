import PromptSync from "prompt-sync";
const prompt = PromptSync();

let age = prompt("Please enter our age")
if (age < 18){
    console.log("** sorry you aren't authroizes");
}else{
    console.log("** welcome**");
}


let rain = true;
if (rain){
    console.log("** I should take my umberrala**");
}else {
    console.log("** I should drop my umbralla at home**");
}
let rain1 = false;
if(rain1){
    console.log("** I should take my umberrala**");
}else{
    console.log("** I should drop my umbralla at home**");
}
// import PromptSync from "prompt-sync"
// const prompt = PromptSync();
let hobby = "dancing"
if (hobby = "coding"){
    console.log("** I love coding**");
}else{
    console.log("** Can you teach me that? **");
}