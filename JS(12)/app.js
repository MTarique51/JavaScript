console.log("<---------------Call Stack------------------>")

function hello() {
    
console.log("inside hello() function");
    console.log("Hello");
}

function demo() {
    
console.log("Calling hello() function");
    hello();
}

console.log("Calling demo() function");
demo();     

console.log("Done , Bye!");                                     

console.log("<--------------- Visualizing the Call Stack------------------>")

function one() {
    return 1;

}

function two() {
    return one() + one();
}

function three() {
    let answ = two() + one();
    console.log(answ);
}

three();        // final call 

console.log("<--------------- BreakPoints------------------>")
// it will be checked at browser in Resource Section

console.log("<--------------- JS is Single Threaded------------------>")

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);

setTimeout(()=> {
    console.log("Mohammad Tarique");
}, 2000);
setTimeout(()=> {
    console.log("Hello World");
}, 2000);
console.log("hello...");