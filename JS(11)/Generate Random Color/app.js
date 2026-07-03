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
