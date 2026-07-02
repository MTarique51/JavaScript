// let para1 = document.createElement("p");
// para1.innerText = "Hey there, I'm the new text!";
// document.querySelector("body").append("p");


console.log("---------------etElementsByClassName--------------------");
let smallImages = document.getElementsByClassName("oldImg");

for(let i=0 ; i<smallImages.length ; i++){
    console.dir(smallImages[i]);
}


console.log("---------------getElementsByTagName--------------------");
let tag = document.getElementsByTagName("p");
    console.dir(tag);

    console.log("------------------- Query Selector --------------------");

console.dir(document.querySelector('h1'));                 // By tag
console.dir(document.querySelector('#description'));       // By Id
console.dir(document.querySelector('.oldImg'));       // By class
console.dir(document.querySelector("div a"));         // query selector is for single 
console.dir(document.querySelectorAll("div a"));         // query selector is for All 
console.dir(document.querySelectorAll("p"));         // query selector is for All 

    console.log("------------------- Setting content in objects(using properties & methods) --------------------");

let para = document.querySelector('p');
console.dir(para);

console.log("for Paragraph: // innerText //");     // innerText:shows the visible text contained in a node(which visible only in screen)
console.log(para.innerText);

console.log("for Paragraph: // innerHTML //");     // show all the full text (hidden also include)
console.log(para.innerHTML);

console.log("for Paragraph: // textContent //");   // Shows the full Markup
console.log(para.textContent);

let heading = document.querySelector('h1');

console.log("for Heading: // innerText //");     // innerText:shows the visible text contained in a node(which visible only in screen)
console.log(heading.innerText);

console.log("For Bold: //innerHTML//");
// heading.innerHTML = "<u>Spider Man</u>";
            //OR
heading.innerHTML = `<u>${heading.innerText}</u>`;

        console.log("------------------- Manipulating Attributes --------------------");

let image = document.querySelector('img');
console.log(image);
console.log("id :" ,image.getAttribute('id'));
console.log("after setting id :" ,image.setAttribute('id' , 'imgMain'));    // in this case CSS style will not match
console.log(image);

        console.log("------------------- Manipulating Styles --------------------");

let Heading = document.querySelector('h1');
console.log(Heading.style);
Heading.style.color = 'purple'; console.log("Now Heading color Changed");
// Heading.style.backgroundColor = 'gray'; console.log("Now Heading backgroundColor Changed");

let links = document.querySelectorAll(" .box a");
// for(let i=0 ; i<links.length ; i++){
//     links[i].style.color = "Orange"
// }
            // Or using for of loop
for(link of links){
    link.style.color = "Red";
}

// USING CLASS LIST
let img = document.querySelector('img');
console.log("class List of the Images :" ,img.classList);
let heaDing = document.querySelector('h1');
heaDing.classList.add("underline");        // adding class
heaDing.classList.remove("underline");     // remove class 
heaDing.classList.toggle("underline");     // Toggling (means  {if yes ♻ No}  )

console.log("------------------- Navigation(1:parent element , 2:Children , 3:previous element shibling/next) --------------------");

// Check for ParentElement
 let h4 = document.querySelector('h4');
 console.log(h4.parentElement);

 // Check for Children
let box = document.querySelector('.box');
console.log("Child Elements are:",box.childElementCount , "  and which are :", box.children);
let ul = document.querySelector('ul');
console.log("Child Elements are:",ul.childElementCount , "  and which are :", ul.children);

// Check for previousElementsibling & nextElementsibling
console.log("Previous sibling of ul:",ul.previousElementSibling);
console.log("Next sibling of h4:,",h4.nextElementSibling);

// Check for previousElementsibling & nextElementsibling with changing style
let Img = document.querySelector('img');
// console.log("Changed color of Previous sibling of img:",Img.previousElementSibling.style.color="red");
