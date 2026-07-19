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
 
console.log("------- Adding Element on Page {(append=add element at end) & (append=add element at end) & insertAdjacent= Where do we want to add Element)}-------");
// ADDING PARAGRAPH USING APPENDCHILD(Element)
let newPara = document.createElement('p');
newPara.innerText = "Hi! I am the new paragraph which is added later. (Added by appendChild) &";
let body = document.querySelector('body');   // for adding any element appendChild need parent node //
body.appendChild(newPara);      // this will show the added para in body tag

let anotherPara = document.createElement('p');
anotherPara.innerText = "Hi! I am the another new Paragraph which is added later.";
let boX = document.querySelector('.box');   // for adding any element appendChild need parent node //
boX.appendChild(anotherPara);      // this will show the added para in the box

// ADDING BUTTON USING APPENDCHILD(Element)
let btn = document.createElement('button');
btn.innerText =("Click me!");
boX.appendChild(btn);               // boX is already declared so direct...


// ADDING ELEMENT USING APPEND(Element)  ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
newPara.append("THIS IS ADDED ONLY BY append");
anotherPara.append(btn);

// ADDING ELEMENT USING PREPEND(Element)
let btnn = document.createElement('button');
btnn.innerText =("CLICK ME!");
boX.prepend(btnn);

// ADDING ELEMENT USING INSERTADJACENTELEMENT(Element)
let button = document.createElement('button');
button.innerHTML = "NEW BIUTTON !";
let A = document.querySelector('p');
A.insertAdjacentElement('beforebegin' , button);
// A.insertAdjacentElement('afterbegin' , button);
// A.insertAdjacentElement('beforeend' , button);
// A.insertAdjacentElement('afterend' , button);

            console.log("------------------- Removing Elements(From Page) --------------------");

// box.removeChild(btnn);      // for removing Element using parent node

// btn.remove();                  // for removing Element directly ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐