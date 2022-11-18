function makeFryAnda(callback) {
    setTimeout(() => {
        callback("Egg Fried");
    }, 2000);   
}
function toastBread(cb){
    setTimeout(() => {
        cb("Teast Done");
    }, 2000);
}
toastBread(function(para){
    console.log(para);
    makeFryAnda(function(para1){
        console.log(para1);
    });
});
/* OuptPut
Teast Done
Egg Fried
*/
toastBread(function(para){
    console.log(para);
    makeFryAnda(function(para1){
        console.log(para1);
    });
});

let toastPromise = new Promise (resolve, reject)