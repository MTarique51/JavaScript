let btn = document.querySelector("button");

btn.addEventListener("click" , function () {

    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;
};
 
console.log("----------------------------------Event Listeners for Elements----------------------------------");

// let p = document.querySelector("p");
// p,addEventListener("click" , function(){
//     console.log("Para was Clicked!");
// });

let box = document.querySelector(".box");
box.addEventListener("mouseenter" , function() {
    console.log("Mouse inside the div!");
});

console.log("-------⭐⭐⭐⭐⭐-------this in Event Listeners-------⭐⭐⭐⭐⭐-------");
//when 'this' is used in a callback of event handler ofsomething,it referse to that something.

// For seprate

// let btnn = document.querySelector("button1");
// btnn.addEventListener("click", function(){
//     console.log(this);
//     console.log("InnerText :",this.innerText);
//     this.style.backgroundColor = "pink";
// })

// for multiple

let btnn = document.querySelector("button1");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

function changedColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "green";
}

btnn.addEventListener("click", changedColor);
h1.addEventListener("click", changedColor);
h2.addEventListener("click", changedColor);

console.log("-----------------------keyboard Events------------------------");

// MOUSE EVENT
let btnnn = document.querySelector("button2");
btnnn.addEventListener("click" , function(event) {
    console.log(event);
    console.log("Button Clicked...");
});
// btnnn.addEventListener("click" , function(event) {
//     console.log(event);
//     console.log("Button Clicked...");
// });

// KEYBOARD EVENT
let inp = document.querySelector("input");
// inp.addEventListener("keydown" , function(event) {     // for Clicking Button
//     console.log(event);
//     console.log("Key was Pressed");
// });
// inp.addEventListener("keyup" , function(event) {       // for Releasing Button
//     console.log(event);
//     console.log("Key was Released");
// });

// inp.addEventListener("keydown" , function(event) {       
//     console.log("Code= ",event.code);    // ArrowUp , ArrowDown , ArrowLeft , ArrowRight
//     if(event.code == "ArrowUp"){
//         console.log("Character moves Forward");
//     }
//     else if(event.code == "ArrowDown"){
//         console.log("Character moves Backward");
//     }
//     else if(event.code == "ArrowLeft"){
//         console.log("Character moves Left");
//     }
//     else if(event.code == "ArrowRight"){
//         console.log("Character moves Right");
//     }
// });

console.log("-----------------------Form Events------------------------");

let form = document.querySelector("form");
form.addEventListener("Submit", function(event) {
    event.preventDefault();                             // for Disconnect the other page
    alert("Form Submitted");
});