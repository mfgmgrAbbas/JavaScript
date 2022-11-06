/* We deal with multitasking code. This concept is called concurrency. Example with callback*/

function judge (grade) {
    switch(true) {
        case grade === "A+":
            console.log("You got an", grade, ": Perfect!");
            break;
        case grade === "A":
            console.log("You got a", grade, ": Ecellent!");
            break;
        case grade === "B":
            console.log("You got a", grade, ": Verry Goog!");
            break;
        case grade === "C":
            console.log("You got an", grade, ": Good!");
            break;
        case grade === "D":
            console.log("You got an", grade, ": Satisfactory!");
            break;
        default:
            console.log("An", grade, ": Oops try again!");

    }
}

function getGrade(percentage, callback) {
    switch (true) {
        case percentage >= 90:
            grade = "A+"
            break;
        case percentage >= 80:
            grade = "A"
            break;
        case percentage >= 60:
            grade = "B"
            break;
        case percentage >= 45:
            grade = "C"
            break;
        case percentage >= 35:
            grade = "D"
            break;
        default:
            grade = "F"

    }   callback(grade);
}

getGrade(95, judge);

/* Output
You got an A+ : Perfect!
*/

function pakistan (grade) {
    switch(true) {
        case grade === "A+":
            console.log("You got an", grade, ": Zabardast!");
            break;
        case grade === "A":
            console.log("You got a", grade, ": bahot lhoob!");
            break;
        case grade === "B":
            console.log("You got a", grade, ": shabash!");
            break;
        case grade === "C":
            console.log("You got an", grade, ": acha ha!");
            break;
        case grade === "D":
            console.log("You got an", grade, ": acha!");
            break;
        default:
            console.log("An", grade, ": Dobara mehnat karo!");

    }
}
function unitedstates (grade) {
    switch(true) {
        case grade === "A+":
            console.log("You got an", grade, ": Perfect!");
            break;
        case grade === "A":
            console.log("You got a", grade, ": Ecellent!");
            break;
        case grade === "B":
            console.log("You got a", grade, ": Verry Goog!");
            break;
        case grade === "C":
            console.log("You got an", grade, ": Good!");
            break;
        case grade === "D":
            console.log("You got an", grade, ": Satisfactory!");
            break;
        default:
            console.log("An", grade, ": Oops try again!");

    }
}
function getGrade(percentage, callback) {
    let grade;
    switch (true) {
        case percentage >= 90:
            grade = "A+"
            break;
        case percentage >= 80:
            grade = "A"
            break;
        case percentage >= 60:
            grade = "B"
            break;
        case percentage >= 45:
            grade = "C"
            break;
        case percentage >= 35:
            grade = "D"
            break;
        default:
            grade = "F"

    }   callback(grade);
}
getGrade(33, pakistan);
getGrade(33, unitedstates);

/* Output
An F : Dobara mehnat karo!
An F : Oops try again!
*/