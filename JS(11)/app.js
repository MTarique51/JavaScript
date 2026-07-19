// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {                            // onClick ⭐⭐⭐⭐⭐
//     console.log("Button Clicked Succesfully.");
// };

let btns = document.querySelectorAll("button");
for(btn of btns) {
//    btn.onclick = sayHello;                              // onClick ⭐⭐⭐⭐⭐
//    btn.onclick = sayName; 

      // By addEventListener  ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
      btn.addEventListener("click" , sayHello);            // sayHello already declared(line=22)
      btn.addEventListener("click" , sayName);             // sayName already declared(line=27)
    
    //   btn.addEventListener("dblclick" , function(){      // addEventlistener for DoubleClick
    //     console.log("You double clicked me!")
    //   }); 

//    btn.onmouseenter = function() {
//     console.log("You entered a button.");
//    }
};
function sayHello(){
    alert("Hello!");
};

// addEventListener(it can add multiple events)
function sayName() {
    alert("Mohammad Tarique");
};


