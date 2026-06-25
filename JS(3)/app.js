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