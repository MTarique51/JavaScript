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

                                // Return Keyword //

