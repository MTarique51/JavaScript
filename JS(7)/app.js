                                // Functions //

function hello() {
    console.log("hello");
}

function printName() {
    console.log("Mohammad Tarique");
}

function print1to5() {
    for(let i=1 ; i<=5 ; i++){
        console.log(i);
    }
}

function isAdult() {
    let age = 23;
    if(age >= 18){
        console.log("Can Vote!");
    }
    else{
        console.log("Can't Vote!");
    }
}
// calling the function which will show the output //
console.log("-------------------------------");
hello(); 
console.log("-------------------------------");
console.log("-------------------------------");
printName(); 
console.log("-------------------------------");
console.log("-------------------------------");
print1to5();  
console.log("-------------------------------");
console.log("-------------------------------");
isAdult();
console.log("-------------------------------");

                                // Practice Question //

console.log("Rolling a Dice!");
function rollDice() {
    let rand = Math.floor(Math.random()*6)+1 ;
    console.log(rand);
}
rollDice();
console.log("-------------------------------");

                                // Function with Aurguments //

function printInfo(name , age ) {
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Tarique" , 23);
printInfo("Aman" , 23);
printInfo("Future");

function sum(a,b) {
    console.log(a+b);
}
sum(1,8);
sum(8,7);
sum(6,9);
console.log("-------------------------------");
 
            // Creating a function that gives us average of 3 numbers //
console.log("Printing Average:");
function avrg(a,b,c) {
    console.log((a+b+c)/3);
}
avrg(1,2,3);
avrg(11,9,3);
console.log("-------------------------------");

            // Creating a function that gives us multiplication table of the number //
console.log("Printing Table:");
function printTable(n){
    for(let i=n ; i<=n*10 ; i+=n){
        console.log(i);
    }
}
printTable(5);
console.log("-------------------------------");

                     // Return Keyword(use to return some value from the function) //
console.log("Returng the Value:")
function sUm(a,b){
    console.log("Hello1");
    console.log("Hello2");
    return a+b;
    console.log("Hello3");
    console.log("Hello4");
}
console.log(sUm(1,2));

console.log("-------------------------------");
                
             // Creating a function that gives us multiplication table of the number //

console.log("Sum of number from one to n:");

function sum1toN(n) {
    let sum = 0;
    for(let i=1 ; i<=n ; i++){
        sum += i;
    }
    return sum;
}
console.log(sum1toN(5));
console.log(sum1toN(100000));
console.log("-------------------------------");

                // Creating a function that gives us the concatination of all strings in an Array //

let str = ["hi" , "hello" , "bye" , "!"];

function concat(str){
    let result ="";
    for(let i=0 ; i<str.length ; i++){
        result += str[i];
    }
    return result;
}
console.log(concat(str));
console.log("-------------------------------");

                             // Scope(type= Function , Block , Lexical) //
// Function Scope
let sum1 = 50;    // global Scope
function calSum(a,b){
    let sum1 = a+b;   // Function Scope (Only in Function)
    console.log(sum1);
}
    calSum(1,2);
    console.log(sum1);  // Globally Accessible// 
console.log("-------------------------------");


// Block Scope
for(let i=0 ; i<=3 ; i++){
    console.log(i);         // Block Scope
}
console.log("-------------------------------");


// Lexical Scope 
function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
         console.log(y);
    }
    innerFunc();
}
console.log(outerFunc());
