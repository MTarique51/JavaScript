// ARITHMETIC OPERATORS
console.log("ARITHMETIC  OPERATORS");
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// UNARY OPERATORS
console.log("UNARY OPERATORS");
console.log(a++);     //10  (Post increment)
console.log(++a);     //12  (Pre increment)

// ASSIGNMENT OPERATOR
console.log("ASSIGNMENT OPERATOR");
let c = 100;
let d = 25;
d = c;
console.log(d)  // 100

// COMPARISON OPERATOR
console.log( "COMPARISON OPERATOR");
let age = 18;
console.log("for number");
console.log(age>18);   // false
console.log(age>=18);  // true
console.log(age<=18);  // true
console.log(age<18);   // false 
console.log(age==18);  // true
console.log(age!=18);  // false

console.log("check for == & ===");
console.log('1234' == 1234);     // true (this will check only the value)
console.log('1234' === 1234);    // false (this wiill check value and type)

console.log("for non number:");
console.log('A'>'a');  //false
console.log('A'<'a');  //true
console.log('B'>'b');  //false

                                          

                                        // CONDITIONAL  STATEMENTS  //


  // if (Statement)                                      

console.log("Before my if statement");
let Age = 23;
if(Age >=18 ){
    console.log("You can vote");
    console.log("You can drive");
}
if(Age > 20 ){
    console.log("You are in your 20's");
}
console.log("After my if statement");

let firstName = "Tarique";
if(firstName == "Tarique"){
    console.log(`Welcome ${firstName}`);
}


// else if (Statement)

if(Age >=18 ){
    console.log("can vote");
    console.log("can drive");
}
else if(Age <18 ){
    console.log("can't vote");
    console.log("can't drive");
}

// if , else if , else (Statements)
let color = "";
if(color === "red"){
    console.log("Please Stop!");
}
else if(color === "yellow"){
    console.log("Please Slow down!");
}
else if(color === "green"){
    console.log("Please Go!");
}
else{
    console.log("Traffic light is Broken");
}

// Nested if else (Statement)
let marks = 99;
if(marks >= 33){
    console.log("Pass");
    if(marks >= 80){
    console.log("Grade : A+");
}
else{
    console.log("Grade : A");
}
}
else{
    console.log("Better Luck Next time!");
}

                                          // LOGICAL OPERATORS //
// Logical AND(&&)
let Marks = 90;
if(Marks >= 33 && Marks >=80){
    console.log("pass");
    console.log("A+");
}   

// Logical OR(||)
let MarksP = 90;
if(MarksP >= 91 ||MarksP >=95){
    console.log("pass");
    console.log("A+");
}
else{
    console.log("fail")
}
let Marks2 = 90;
if(!(Marks2 < 33)){
    console.log("pass");
    console.log("A+");
} 

let Marks3 = 23;
if((Marks3 > 33 && Marks3 <= 80) || !(false)){    // !(false) always show true
    console.log("true")
}

                         // Practice Question //


let str = "apple";
if(str[0] === 'a' && str.length > 3){
    console.log("Good String");
}
else{
    console.log("Not a Good String");
}

 
                      // SWITCH STATEMENT //
                      
                      
let Color = "blue";
switch (Color){
        case "red":
        console.log("Stop!");
        break;

        case "yellow":
        console.log("slow down!");
        break;

        case "green":
        console.log("Go!");
        break;

        default:
        console.log("light is broken!");
        break;
} 

alert("This is a Simple Alert test!");                    // this will show alway an alert if we refresh the page//
let name = prompt("Enter your name here:");               // this will show a popup for enter somthing //
console.log(name);