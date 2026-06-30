                        // This Keyword //
console.log("-----------------------------------");
const student = {
    name: "Tarique",
    age: 23,
    eng: 95,
    math: 94,
    js: 96,

    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.js) / 3;
          console.log(`${this.name} got average marks = ${avg}`);

    }
}
console.log("-----------------------------------");

                        // Try & Catch //

console.log("-----------------------------------");
console.log("Hello1");
console.log("Hello1");
  try
  {
    console.log(a);
  }
  catch
  {
    console.log("Caught an Error! .... a is not defined");
  }
console.log("Hello2");
console.log("Hello2");
console.log("Hello2");
console.log("-----------------------------------");

            // **************-------------MISCELLANEOUS TOPICS---------------************* //
  console.log(" // **************-------------MISCELLANEOUS TOPICS---------------************* //")

// Arrow Functions
const sum = (a , b) => {
    console.log(a + b);
}
console.log(sum(13,8));

const Cube = n => {
    return n*n*n;
}
console.log("Cube: " ,Cube(11));
console.log("-----------------------------------");

// implicit return in Arrow Functions (means automatic return)
const mul = (a , b) =>(
    a * b
);
console.log(mul(9,7));
console.log("-----------------------------------");

// Set Timeout function
console.log("Hi there!");
// setTimeout ( () => {
//     console.log("T"); 
// }, 7000);

// setTimeout ( () => {
//     console.log("A");    
// }, 8000);

// setTimeout ( () => {
//     console.log("R");   // this will print after set time
// }, 9000);

// setTimeout ( () => {
//     console.log("I");   // this will print after set time
// }, 10000);

// setTimeout ( () => {
//     console.log("Q");   // this will print after set time
// }, 11000);

// setTimeout ( () => {
//     console.log("U");   // this will print after set time
// }, 12000);

// setTimeout ( () => {
//     console.log("E");   // this will print after set time
// }, 13000);
// setTimeout ( () => {
//     console.log("Alhamdulillah");   // this will print after set time
// }, 20000);
// console.log("Welcome :");


// set Interval (Infinitly runs)

// let id1 = setInterval( () => {
//     console.log("Tarique");
// }, 2000);

// let id2 = setInterval( () => {
//     console.log("Zalique");
// // }, 4000);
// clearInterval(id1 , id2);