// for inifity time repeat.

function getRecursive(nr) {
    console.log(nr);
    getRecursive(--nr);
}
getRecursive(5); 

/* Output
-10294
-10295
-10296
-10297
-------
-------
-------
-11276
-11277
-11278
-11279
-11280
-11281
-11282
-11283
-11284
-11285
-11286
-11287
node:internal/util/inspect:766
function formatValue(ctx, value, recurseTimes, typedArray) {
                    ^

RangeError: Maximum call stack size exceeded */


//  to stop recursive function

 function getRecursive(nr) {
    console.log(nr);
    if (nr > 0)
    getRecursive(--nr);
}
getRecursive(5);

/* Output
5
4
3
2
1
0
*/

// step by step recursive function

function getRecursive(nr) {
    console.log ("Started function iteration ", nr);
    if (nr > 0) {
    getRecursive(--nr);
    } else {
        console.log("Recursion completed");
    }
    console.log("Function ended: ", nr);
}
getRecursive(5);

/* Output
Started function iteration  5
Started function iteration  4
Started function iteration  3
Started function iteration  2
Started function iteration  1
Started function iteration  0
Recursion completed
Function ended:  0
Function ended:  0
Function ended:  1
Function ended:  2
Function ended:  3
Function ended:  4
*/

 function logRecursive(nr) {
    console.log("Started function:", nr);
    if (nr > 0) {
    logRecursive(nr - 1);
    } else {
    console.log("done with recursion");
    }
    console.log("Ended function:", nr);
   }
   logRecursive(3);

/* Ouput
Started function: 3
Started function: 2
Started function: 1
Started function: 0
done with recursion
Ended function: 0
Ended function: 1
Ended function: 2
Ended function: 3
*/