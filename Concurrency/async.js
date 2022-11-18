// const myPromise = new Promise(resolve, reject )=> {
//     resolve ("I am resolved.");

// }

// async function myFunction(params) {
//     const resolveValue = await myPromise;
//     console.log(resolveValue);

// }
// myFunction();

/* function job1(callback) {
  setTimeout(function () {
    callback("test 1");
  }, 2000);
}
function job2(callback) {
  setTimeout(() => {
    callback("test 2");
  }, 3000);
}
job1(function (data) {
  console.log(data);
  job2(function (data) {
    console.log(data);
  });
});
*/
// Callback
/* const doSomthing = (callback) => {
  console.log("Do something");
  callback();
}
const doSomthing1 = () => {
  console.log("call back called");
}
doSomthing(doSomthing1);*/

// setTimeout (() => {
//   console.log("called");
// }, 3000);

// const loginuser = (email, password) => {
//   setTimeout (() => {
//     console.log("user loged in");
//   }, 2000)
// }
// loginuser('smasnb5@gmail.com', 123546)

// undefined output

// const loginuser1 = (email, password) => {
//   setTimeout (() => {
//     return email;
//   }, 2000)
// }
// const userEmail = loginuser1('smasnb5@gmail.com', 123546)
// console.log(userEmail);

// to call a callback
// const loginuser3 = (email, pass, callback) => {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };
// loginuser3("sdsd@gmail.com", 4568, () => {
//   console.log("callback called");
// });

// const loginuser2 = (email, password, callback) => {
//   setTimeout(() => {
//     callback(email);
//   }, 2000);
// };
// loginuser2("sdsd@gmail.com", 12345, (email) => {
//   console.log(email);
// });

// const loginuser4 = (email, pass, callback) => {
//   setTimeout(() => {
//     callback(email);
//   }, 2000);
// };
// const getuserVideos = (email, cb) => {
//   setTimeout(() => {
//     cb(["viseo1", "video 2", "video 3"]);
//   }, 3000);
// };
// loginuser4("asdfsd@gmail.com", 12345, (email) => {
//   console.log("user loged in");
//   getuserVideos(email, (videos) => {
//     console.log(videos);
//   });
// });
/* Output
user loged in
[ 'viseo1', 'video 2', 'video 3' ]
*/

// Callback hell, callback create nested code difficult to read, function are dependent to each other and no error handling.
// Promise, three states of promise, resolve, reject and pending
// new keyword create an object of promise
// let promise = new Promise ((resolve, reject) => {

// })
// console.log(promise);
// /* Ouput
// Promise { <pending> }
// */
// console.dir(promise);

// Resolve example
let promise1 = new Promise((resolve, reject) => {
  let myPercentage = 80;
  if (myPercentage >= 80) {
    resolve();
  } else {
    reject();
  }
});
promise1.then(() => {
  console.log("Resolved");
});
/* Ouput Resoled */
// reject example
let promise2 = new Promise((resolve, reject) => {
  let myPercentage1 = 70;
  if (myPercentage1 >= 80) {
    resolve();
  } else {
    reject();
  }
});
promise2.catch(() => {
  console.log("Rejected");
});
/* Ouput Rejected */

let promisefunc = (myPercentage) => {
  return new Promise((resolve, reject) => {
    if (myPercentage >= 80) {
      resolve("Resolved");
    } else {
      reject("Rejcted");
    }
  });
};
promisefunc(90)
  .then((anything) => {
    console.log(anything);
  })
  .catch((anyerror) => {
    console.log(anyerror);
  });

let loginUserPromise = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User Loged in");
    }, 2000);
    resolve(email);
    reject("You need to Login");
  });
};
let userVideosPromise = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Video 1", "Video 2", "Video3"]);
    }, 3000);
  });
};
loginUserPromise("adfsf@gmail.com", 12458)
  .then((e) => {
    console.log(e);
    return userVideosPromise(e);
  })
  .then((videos) => {
    console.log(videos);
  });

// .catch
let loginUserPromise1 = (email, pass) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "abc@gmail.com" && pass === 45687) {
        resolve("Welcome back!");
      } else {
        reject("Invalid username or password");
      }
    }, 3000);
  });
};
let userVideosPromise1 = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "abc@gmail.com") {
        resolve(["Video1", "Video2", "Video3"]);
      } else {
        reject("Please provide a valid email address");
      }
    }, 4000);
  });
};
loginUserPromise1("abc@gmail.com", 45687) // if I put wrong password or email address then error in the catch Invalid username or password
  .then((email) => {
    console.log(email);
    return userVideosPromise1(email);
  })
  .then((email) => {
    console.log(email);
  })
  .catch((error) => {
    console.log(error); // Invalid username or password
  });
/*loginUserPromise1("abc@gmail.com", 45687) // if I provide correct email and password
  .then((email) => {
    console.log(email);
  //  return userVideosPromise1(); // if I did not pass email here coming from above then. 2nd reject will be in action
  })
  .catch((error) => {
    console.log(error); // output Please provide a valid email address
  }).then ((error)=>{ console.log("then of catch into action");}) */

  
  let userDetails = async() =>{
    try {

      const userEmail = await loginUserPromise1("abc@gmail.com", 45687);
    console.log(userEmail);
    const userVideos = await userVideosPromise1(userEmail);
    console.log(userVideos);
    }catch(error){
      console.log(error);
    };
    }
    
userDetails();