console.log("<---------------Call Stack------------------>")

function hello() {
    
console.log("Inside hello() function");
    console.log("Hello");
}

function demo() {
    
console.log("Calling hello() function");
    hello();
}

console.log("Calling demo() function");
demo();     

console.log("Done , Bye!");                                     

console.log("<--------------- Visualizing the Call Stack------------------>")

function one() {
    return 1;

}

function two() {
    return one() + one();
}

function three() {
    let answ = two() + one();
    console.log(answ);
}

three();        // final call 

console.log("<--------------- BreakPoints------------------>")
// it will be checked at browser in Resource Section

console.log("<--------------- JS is Single Threaded------------------>")

// this is a small check
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);

// setTimeout(()=> {
//     console.log("Mohammad Tarique");
// }, 2000);
// setTimeout(()=> {
//     console.log("Hello World");
// }, 2000);
// console.log("hello...");

console.log("<---------------Callback Hell------------------>");
// Callbacks Nesting -----> Callback Hell

h1 = document.querySelector("h1")

    // setTimeout(()=> {
    //     h1.style.color = "Orange";
    // }, 1000);

    // setTimeout(()=> {
    //     h1.style.color = "blue";
    // }, 2000);

    // setTimeout(()=> {
    //     h1.style.color = "pink";
    // }, 3000);

    // setTimeout(()=> {
    //     h1.style.color = "black";
    // }, 4000);

           // OR

    // function ChangeColor(color , delay){
    //     setTimeout(()=> {
    //         h1.style.color = color;
    //     }, delay)
    // }

    // ChangeColor(("Orange") , 1000);
    // ChangeColor(("blue") , 2000);
    // ChangeColor(("pink") , 3000);
    // ChangeColor(("Black") , 4000);

                  // OR  

    function ChangeColor(color , delay){
            return new Promise((resolve , reject) =>{
              setTimeout(() => {
               h1.style.color = color;
               resolve("color changed!");
            }, delay)
        });
    }

    ChangeColor("red" , 1000)
    .then(() => {
        console.log("red color was completed");
        return ChangeColor("Orange" , 1000);
    })
    .then(() => {
        console.log("Orange color was completed");
        return ChangeColor("Yellow" , 1000);
    })
    .then(() => {
        console.log("Yellow color was completed");
        return ChangeColor("Blue" , 1000);
    })
    .then(() => {
        console.log("Blue color was completed");
    })

    // ChangeColor("Orange" , 1000 , () => {
    //     ChangeColor("blue", 1000 , () => {
    //         ChangeColor("pink" , 1000 , () => {
    //             ChangeColor("black" , 1000)
    //         }); 
    //     });
    // });

    console.log("<---------------Callback Hell------------------>");

// function savetoDb(data , success , failure) {
//     let internetSpeed = Math.floor( Math.random() * 10 ) + 1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }
// savetoDb(
//     "TaRiQuE" ,
//     () => {
//        console.log("Success1 : Your data was saved ");
//        savetoDb(
//          "hello world" , 
//            () => {
//              console.log("Success2 : Data2 saved");
//                 savetoDb(
//                   "Zalique" , 
//                      () => {
//                        console.log("Success3 : Data3 saved");
//                           },
//                       () => {
//                         console.log("Failure3 : weak connection Data3 not saved");
//                     }
//                  );
//               },
//             () => {
//           console.log("Failure2 : weak connection Data2 not saved");
//         }
//      );
//   },
//      () => {
//     console.log("Failure1 : Weak connection! data not saved");
//     },
// );

       console.log("<---------------Refactoring with promises(resolve , reject)------------------>");

// function savetoDb(data) {
//      return new Promise((resolve , reject) => {
//        let internetSpeed = Math.floor( Math.random() * 10 ) + 1;
//        if(internetSpeed > 4) {
//         resolve("Success :data saved");
//        }
//        else{
//         reject("Failure : weak connection");
//        }
//      });
// }

// savetoDb("Tarique");

     console.log("<-------⭐⭐⭐--------Promises(then() , catch())--------⭐⭐⭐-------->");

// savetoDb("TARIQUE")
//     .then(() => {
//       console.log("primise was resolved");
//  })
//     .catch(() => {
//       console.log("promise was rejected");
//  });

    console.log("<--------⭐⭐⭐-------Promises Chaining--------⭐⭐⭐-------->");

// savetoDb("TARIQUE")
//     .then(() => {
//       console.log("data1 saved.");
//       return savetoDb("Ahmad");
//     })
//     .then(() => {
//         console.log("data2 saved.");
//         return savetoDb("Sajid"); 
//     })
//     .then(() => {
//         console.log("data3 saved.");
//     })
//     .catch(() => {
//       console.log("promise was rejected");
//     });


    console.log("<--------⭐⭐⭐-------Results & errors in Promises--------⭐⭐⭐-------->");

// savetoDb("TariquE")
//   .then((result) => {
//     console.log("data1 saved");
//     console.log("result of promise :" , result);
//     return savetoDb("Hello World");
//   })
//   .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promise :" , result);
//     return savetoDb("Apna College");
//   })
//   .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promise :" , result);
//   })
//   .catch((error) => {
//     console.log("promises was rejected");
//     console.log("error of promise :", error);
//   });

  console.log("<--------⭐⭐⭐-------Refactoring old code--------⭐⭐⭐-------->");