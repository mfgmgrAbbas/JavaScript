/* ; it has three operands. Here is
its template:
operand1 ? operand2 : operand3;
operand1 is the expression that is to be evaluated. If the value of the
expression is true , operand2 gets executed. If the value of the expression
is false , operand3 gets executed. You can read the question mark as
"then" and the colon as "else" here:
*/
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let age = prompt("please enter your age: ");
//let access = age < 18 ? "denied" : "allowed";
age < 18 ? console.log("denied") : console.log("allowed");
/* please enter your age: 25
allowed
please enter your age: 17
denied */

